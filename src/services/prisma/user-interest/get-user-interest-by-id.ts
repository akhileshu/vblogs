import type{ PrismaClient } from "@prisma/client";

export async function getUserInterestById(prisma: PrismaClient, id: string) {
  return prisma.userInterest.findUnique({ where: { id } });
}
