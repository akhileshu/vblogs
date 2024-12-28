import type{ PrismaClient } from "@prisma/client";

export async function getBlogContentById(prisma: PrismaClient, id: string) {
  return prisma.blogContent.findUnique({ where: { id } });
}
