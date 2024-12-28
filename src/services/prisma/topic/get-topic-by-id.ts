import type{ PrismaClient } from "@prisma/client";

export async function getTopicById(prisma: PrismaClient, id: string) {
  return prisma.topic.findUnique({ where: { id } });
}
