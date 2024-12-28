import type{ PrismaClient } from "@prisma/client";

export async function getAllTopics(prisma: PrismaClient) {
  return prisma.topic.findMany();
}
