import type{ PrismaClient } from "@prisma/client";

export async function getUserById(prisma: PrismaClient, id: string) {
  return prisma.user.findUnique({ where: { id } });
}
