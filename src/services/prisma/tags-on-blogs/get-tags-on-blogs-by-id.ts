import type{ PrismaClient } from "@prisma/client";

export async function getTagsOnBlogsById(prisma: PrismaClient, id: string) {
  return prisma.tagsOnBlogs.findUnique({ where: { id } });
}
