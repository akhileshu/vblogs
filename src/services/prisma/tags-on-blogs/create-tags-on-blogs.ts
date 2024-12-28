import type{ PrismaClient, Prisma } from "@prisma/client";

export async function createTagsOnBlogs(prisma: PrismaClient, data: Prisma.TagsOnBlogsCreateInput) {
  return prisma.tagsOnBlogs.create({ data });
}
