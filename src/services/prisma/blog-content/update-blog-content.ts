import { PrismaClient, Prisma } from "@prisma/client";

export async function updateBlogContent(prisma: PrismaClient, id: string, data: Prisma.BlogContentUpdateInput) {
  return prisma.blogContent.update({ where: { id }, data });
}
