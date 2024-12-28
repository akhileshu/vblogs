import { PrismaClient, Prisma } from "@prisma/client";

export async function updateTagsOnBlogs(prisma: PrismaClient, id: string, data: Prisma.TagsOnBlogsUpdateInput) {
  return prisma.tagsOnBlogs.update({ where: { id }, data });
}
