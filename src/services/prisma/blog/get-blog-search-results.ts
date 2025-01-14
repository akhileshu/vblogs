import { BlogSearchQueryParameters } from "@/shared/types/models/blog";
import type { Prisma, PrismaClient } from "@prisma/client";

export async function getBlogSearchResults(
  prisma: PrismaClient,
  {
    query,
    topicIdsCsv,
    tagIdsCsv,
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
        tags: {
          //blog must be associated with at least one tag that matches the tagIdsCsv values
          some: {
            tagId: {
              in: tagIdsCsv?.split(","),
            },
          },
        },
      },
      include: {
        tags: {
          select: {
            tag: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
        topic: {
          select: {
            id: true,
            title: true,
          },
        },
      },
      orderBy,
    });
    return blogs;
  } catch (error) {
    throw error;
  }
}
