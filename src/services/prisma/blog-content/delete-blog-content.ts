import type{ PrismaClient } from "@prisma/client";

export async function deleteBlogContent(prisma: PrismaClient, id: string) {
  return prisma.blogContent.delete({ where: { id } });
}
