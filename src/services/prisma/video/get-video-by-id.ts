import type{ PrismaClient } from "@prisma/client";

export async function getVideoById(prisma: PrismaClient, id: string) {
  return prisma.video.findUnique({ where: { id } });
}
