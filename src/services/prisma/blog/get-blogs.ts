import type{ PrismaClient } from "@prisma/client";

export async function getAllBlogs(prisma: PrismaClient) {
  try {
    return prisma.blog.findMany({});
  } catch (error) {
    throw error;
  }
}
