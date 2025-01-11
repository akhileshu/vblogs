import { BlogSearchQueryParameters } from "@/shared/types/models/blog";
import type { Prisma, PrismaClient } from "@prisma/client";

export async function getBlogsByAuthorId(
  prisma: PrismaClient,
  authorId: string,
  {
    orderBy,
  }: BlogSearchQueryParameters & {
    orderBy?: Prisma.BlogOrderByWithRelationInput;
  }
) {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        authorId: authorId,
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
