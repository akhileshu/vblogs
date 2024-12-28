import type{ PrismaClient } from "@prisma/client";

export async function getTagById(prisma: PrismaClient, id: string) {
  return prisma.tag.findUnique({ where: { id } });
}
