import type{ PrismaClient, Prisma } from "@prisma/client";

export async function createTechnology(prisma: PrismaClient, data: Prisma.TechnologyCreateInput) {
  return prisma.technology.create({ data });
}
