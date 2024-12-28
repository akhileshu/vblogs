import type{ PrismaClient } from "@prisma/client";

export async function deleteGoal(prisma: PrismaClient, id: string) {
  return prisma.goal.delete({ where: { id } });
}
