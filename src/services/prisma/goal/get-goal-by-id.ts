import type{ PrismaClient } from "@prisma/client";

export async function getGoalById(prisma: PrismaClient, id: string) {
  return prisma.goal.findUnique({ where: { id } });
}
