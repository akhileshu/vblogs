import { PrismaClient, Prisma } from "@prisma/client";

export async function updateUserInterest(prisma: PrismaClient, id: string, data: Prisma.UserInterestUpdateInput) {
  return prisma.userInterest.update({ where: { id }, data });
}
