import type{ PrismaClient, Prisma } from "@prisma/client";

export async function createUserInterest(prisma: PrismaClient, data: Prisma.UserInterestCreateInput) {
  return prisma.userInterest.create({ data });
}
