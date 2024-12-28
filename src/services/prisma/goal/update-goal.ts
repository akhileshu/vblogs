import { PrismaClient, Prisma } from "@prisma/client";

export async function updateGoal(prisma: PrismaClient, id: string, data: Prisma.GoalUpdateInput) {
  return prisma.goal.update({ where: { id }, data });
}
