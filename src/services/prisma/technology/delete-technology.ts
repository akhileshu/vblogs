import type{ PrismaClient } from "@prisma/client";

export async function deleteTechnology(prisma: PrismaClient, id: string) {
  return prisma.technology.delete({ where: { id } });
}
