import type{ PrismaClient } from "@prisma/client";

export async function getAllTechnologys(prisma: PrismaClient) {
  return prisma.technology.findMany();
}
