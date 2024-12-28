import { PrismaClient, Prisma } from "@prisma/client";

export async function updateBlog(prisma: PrismaClient, id: string, data: Prisma.BlogUpdateInput) {
  return prisma.blog.update({ where: { id }, data });
}
