import { getBlogOrderBy as getBlogOrderBy } from "../lib/blog-sort";
import prisma from "../lib/prisma";
import { BlogSearchQueryParameters } from "../types/blog-search";

export const getBlogContentBySlugFromDb = async (slug: string) => {
  try {
    const contentField = await prisma.blog.findUnique({
      where: {
        slug,
      },
      select: {
        content: true, // Select the associated BlogContent
      },
    });
    return contentField?.content;
  } catch (error) {
    throw error;
  }
};

export const getBlogsByAuthorIdFromDb = async (authorId: string) => {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        authorId: authorId,
      },
    });
    return blogs;
  } catch (error) {
    throw error;
  }
};

export const getBlogSearchResultsFromDb = async ({
  query,
  sortKey,
  topicIdsCsv,
}: BlogSearchQueryParameters) => {
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
};
