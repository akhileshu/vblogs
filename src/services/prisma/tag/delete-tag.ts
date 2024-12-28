import type{ PrismaClient } from "@prisma/client";

export async function deleteTag(prisma: PrismaClient, id: string) {
  return prisma.tag.delete({ where: { id } });
}
