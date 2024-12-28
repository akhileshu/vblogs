import type{ PrismaClient } from "@prisma/client";

export async function getTechnologyById(prisma: PrismaClient, id: string) {
  return prisma.technology.findUnique({ where: { id } });
}
