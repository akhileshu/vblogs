import type{ PrismaClient } from "@prisma/client";

export async function getAllVideos(prisma: PrismaClient) {
  return prisma.video.findMany();
}
