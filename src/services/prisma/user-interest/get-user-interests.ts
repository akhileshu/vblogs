import type{ PrismaClient } from "@prisma/client";

export async function getAllUserInterests(prisma: PrismaClient) {
  return prisma.userInterest.findMany();
}
