import type{ PrismaClient } from "@prisma/client";

export async function getAllGoals(prisma: PrismaClient) {
  return prisma.goal.findMany();
}
