import type{ PrismaClient } from "@prisma/client";

export async function getBlogById(prisma: PrismaClient, id: string) {
  return prisma.blog.findUnique({ where: { id } });
}
