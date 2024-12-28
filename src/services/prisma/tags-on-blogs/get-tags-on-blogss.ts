import type{ PrismaClient } from "@prisma/client";

export async function getAllTagsOnBlogss(prisma: PrismaClient) {
  return prisma.tagsOnBlogs.findMany();
}
