import type{ PrismaClient } from "@prisma/client";

export async function deleteBlog(prisma: PrismaClient, id: string) {
  return prisma.blog.delete({ where: { id } });
}
