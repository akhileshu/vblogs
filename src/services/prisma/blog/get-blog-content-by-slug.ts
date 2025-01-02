import type { PrismaClient } from "@prisma/client";

export async function getBlogContentBySlug(prisma: PrismaClient, slug: string) {
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
}
