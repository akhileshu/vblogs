import type{ PrismaClient } from "@prisma/client";

export async function getAllBlogs(prisma: PrismaClient) {
  return prisma.blog.findMany();
}
