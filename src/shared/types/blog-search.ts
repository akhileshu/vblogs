import { SortKey } from "../lib/blog-sort";

export type BlogSearchQueryParameters = {
  query?: string;
  sortKey?: SortKey;
  topicIdsCsv?: string;
};
