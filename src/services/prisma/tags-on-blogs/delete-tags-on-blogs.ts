import type{ PrismaClient } from "@prisma/client";

export async function deleteTagsOnBlogs(prisma: PrismaClient, id: string) {
  return prisma.tagsOnBlogs.delete({ where: { id } });
}
