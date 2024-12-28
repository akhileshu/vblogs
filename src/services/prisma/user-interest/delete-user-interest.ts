import type{ PrismaClient } from "@prisma/client";

export async function deleteUserInterest(prisma: PrismaClient, id: string) {
  return prisma.userInterest.delete({ where: { id } });
}
