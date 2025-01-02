import type { PrismaClient } from "@prisma/client";

export async function getTechnologiesByGoalId(prisma: PrismaClient, goalId: string) {
  try {
    const technologies = await prisma.technology.findMany({
      where: {
        goalId: goalId,
      },
    });
    return technologies;
  } catch (error) {
    throw error;
  }
}
