"use server";

import { Response } from "@/server-actions/types/response";
import { BlogServiceImplementation } from "@/services/prisma/blog/blog-service";
import { SortKeyUnionForZod } from "@/shared/lib/blog-sort";
import prisma from "@/shared/lib/prisma";
import { BlogSearchQueryParameters } from "@/shared/types/models/blog";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const blogSearchFiltersSchema = z.object({
  query: z.string().optional(),
  sortKey: z.enum(SortKeyUnionForZod).optional(),
  topicIdsCsv: z
    .string()
    .optional()
    .transform((val) => (val ? val.split(",").map((id) => id.trim()) : []))
    .refine(
      (ids) => ids.every((id) => z.string().uuid().safeParse(id).success),
      {
        message: "Each topic ID must be a valid UUID",
      }
    ),
});

export const getBlogSearchResultsHandler = async (
  params: BlogSearchQueryParameters
): Promise<
  Response<
    Awaited<ReturnType<BlogServiceImplementation["getBlogSearchResults"]>>,
    z.infer<typeof blogSearchFiltersSchema>
  >
> => {
  try {
    const { error } = blogSearchFiltersSchema.safeParse(params);
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const blogService = new BlogServiceImplementation(prisma);
    return {
      success: true,
      data: await blogService.getBlogSearchResults(params),
    };
  } catch (error) {
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
