import { PrismaClient, Prisma } from "@prisma/client";

export async function updateTechnology(prisma: PrismaClient, id: string, data: Prisma.TechnologyUpdateInput) {
  return prisma.technology.update({ where: { id }, data });
}
