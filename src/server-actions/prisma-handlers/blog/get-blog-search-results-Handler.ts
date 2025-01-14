"use server";

import { Response } from "@/server-actions/types/response";
import { BlogServiceImplementation } from "@/services/prisma/blog/blog-service";
import { SortKeyUnionForZod } from "@/shared/lib/blog-sort";
import prisma from "@/shared/lib/prisma";
import { BlogSearchQueryParameters } from "@/shared/types/models/blog";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const csvUUIDSchema = z
  .string()
  .optional()
  .refine(
    (val) => {
      if (!val) return true; // Allow undefined or empty values
      const ids = val.split(",").map((id) => id.trim());
      return ids.every((id) => z.string().uuid().safeParse(id).success);
    },
    { message: "Each item in the CSV must be a valid UUID" }
  );

const blogSearchFiltersSchema = z.object({
  query: z.string().optional(),
  sortKey: z.enum(SortKeyUnionForZod).optional(),
  topicIdsCsv: csvUUIDSchema,
  tagIdsCsv: csvUUIDSchema,
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
