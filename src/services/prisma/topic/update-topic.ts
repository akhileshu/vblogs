import { PrismaClient, Prisma } from "@prisma/client";

export async function updateTopic(prisma: PrismaClient, id: string, data: Prisma.TopicUpdateInput) {
  return prisma.topic.update({ where: { id }, data });
}
