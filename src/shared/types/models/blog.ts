import { SortKey } from "../../lib/blog-sort";

export type BlogSearchQueryParameters = {
  query?: string;
  sortKey?: SortKey;
  topicIdsCsv?: string;
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