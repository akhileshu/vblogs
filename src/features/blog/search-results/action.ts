"use server";

import { SortKeyUnionForZod } from "@/shared/lib/blog-sort";
import { getBlogSearchResultsFromDb } from "@/shared/database/getBlog";
import { BlogSearchQueryParameters } from "@/shared/types/blog-search";
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

export const getBlogSearchResults = async (
  queryParams: BlogSearchQueryParameters
) => {
  const validationResult = blogSearchFiltersSchema.safeParse(queryParams);
  if (!validationResult.success) {
    throw new Error(
      `Invalid search filters: ${validationResult.error.message}`
    );
  }
  return getBlogSearchResultsFromDb(queryParams);
};
