import { getBlogOrderBy } from "@/shared/lib/blog-sort";
import { BlogSearchQueryParameters } from "@/shared/types/models/blog";
import type { PrismaClient } from "@prisma/client";

export async function getBlogSearchResults(
  prisma: PrismaClient,
  { query, sortKey, topicIdsCsv }: BlogSearchQueryParameters
) {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        AND: query
          ? [
              {
                OR: [
                  {
                    title: {
                      contains: query,
                    },
                  },
                  {
                    description: {
                      contains: query,
                    },
                  },
                ],
              },
            ]
          : [],

        topicId: {
          in: topicIdsCsv?.split(","),
        },
      },
      orderBy: sortKey ? getBlogOrderBy(sortKey) : undefined,
    });
    return blogs;
  } catch (error) {
    throw error;
  }
}
