import type{ PrismaClient } from "@prisma/client";

export async function getAllBlogContents(prisma: PrismaClient) {
  return prisma.blogContent.findMany();
}
