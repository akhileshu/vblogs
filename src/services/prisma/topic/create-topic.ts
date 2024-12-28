import type{ PrismaClient, Prisma } from "@prisma/client";

export async function createTopic(prisma: PrismaClient, data: Prisma.TopicCreateInput) {
  return prisma.topic.create({ data });
}
