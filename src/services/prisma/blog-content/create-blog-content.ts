import type{ PrismaClient, Prisma } from "@prisma/client";

export async function createBlogContent(prisma: PrismaClient, data: Prisma.BlogContentCreateInput) {
  return prisma.blogContent.create({ data });
}
