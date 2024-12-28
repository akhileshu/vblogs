import type{ PrismaClient } from "@prisma/client";

export async function deleteVideo(prisma: PrismaClient, id: string) {
  return prisma.video.delete({ where: { id } });
}
