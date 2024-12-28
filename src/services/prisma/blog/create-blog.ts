import type{ PrismaClient, Prisma } from "@prisma/client";

export async function createBlog(prisma: PrismaClient, data: Prisma.BlogCreateInput) {
  return prisma.blog.create({ data });
}
