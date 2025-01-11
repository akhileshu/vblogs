import { BlogSortOption } from "@/features/render-sort-options";
import { Prisma } from "@prisma/client";

type BlogSortFields = Pick<
  Prisma.BlogGetPayload<object>,
  "createdAt" | "readTimeInMinutes" | "views"
>;
type ModelField = keyof BlogSortFields;

export type SortKey =
  | "popularity"
  | "relevance"
  | "trending"
  | "newest"
  | "oldest"
  | "shortestRead"
  | "longestRead";

export const SortKeyUnionForZod = [
  "popularity",
  "relevance",
  "trending",
  "newest",
  "oldest",
  "shortestRead",
  "longestRead",
] as const;

export const singleSortOptions: BlogSortOption<SortKey, ModelField>[] = [
  {
    key: "popularity",
    field: "views",
    order: "desc",
  },
  {
    key: "relevance",
  },
  {
    key: "trending",
  },
];

export const groupSortOptions: BlogSortOption<SortKey, ModelField>[][] = [
  [
    {
      key: "newest",
      field: "createdAt",
      order: "desc",
    },
    {
      key: "oldest",
      field: "createdAt",
      order: "asc",
    },
  ],
  [
    {
      key: "shortestRead",
      field: "readTimeInMinutes",
      order: "asc",
    },
    {
      key: "longestRead",
      field: "readTimeInMinutes",
      order: "desc",
    },
  ],
];
