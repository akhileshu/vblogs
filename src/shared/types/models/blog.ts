import { z } from "zod";
import { SortKey } from "../../lib/blog-sort";

export type BlogSearchQueryParameters = {
  query?: string;
  sortKey?: SortKey;
  topicIdsCsv?: string;
  tagIdsCsv?: string;
};

export type AddBlogMetadataInput = {
  title: string;
  topicId: string;
  tagIds: string[];
};

export type SaveBlogContentInput = {
  slug: string;
  content: string;
};

export const AddBlogMetadataSchema = z.object({
  title: z.string().min(10, "Title is required"),
  topicId: z.string().uuid("Invalid Topic ID"),
  tagIds: z.string().transform((tagsString) => {
    const parsedTags = JSON.parse(tagsString);
    return z.array(z.string().uuid("Invalid Tag ID")).parse(parsedTags); //After parsing the JSON string, the parsedTags is validated against an array of tagSchema objects.
  }),
});
export type AddBlogMetadataSchemaType = z.infer<typeof AddBlogMetadataSchema>;