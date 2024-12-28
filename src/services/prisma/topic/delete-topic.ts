import type{ PrismaClient } from "@prisma/client";

export async function deleteTopic(prisma: PrismaClient, id: string) {
  return prisma.topic.delete({ where: { id } });
}
