import type{ PrismaClient, Prisma } from "@prisma/client";

export async function createGoal(prisma: PrismaClient, data: Prisma.GoalCreateInput) {
  return prisma.goal.create({ data });
}
