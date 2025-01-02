import type { PrismaClient } from "@prisma/client";

export async function getBlogsByAuthorId(prisma: PrismaClient, authorId: string) {
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
}
