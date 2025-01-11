import { BlogSearchQueryParameters } from "@/shared/types/models/blog";
import type { Prisma, PrismaClient } from "@prisma/client";

export async function getBlogSearchResults(
  prisma: PrismaClient,
  {
    query,
    topicIdsCsv,
    orderBy,
  }: BlogSearchQueryParameters & {
    orderBy?: Prisma.BlogOrderByWithRelationInput;
  }
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
                      mode: "insensitive",
                    },
                  },
                  {
                    description: {
                      contains: query,
                      mode: "insensitive",
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
      orderBy,
    });
    return blogs;
  } catch (error) {
    throw error;
  }
}
