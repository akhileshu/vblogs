import type{ PrismaClient } from "@prisma/client";

export async function getAllTags(prisma: PrismaClient) {
  return prisma.tag.findMany();
}
