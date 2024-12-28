import type{ PrismaClient, Prisma } from "@prisma/client";

export async function createVideo(prisma: PrismaClient, data: Prisma.VideoCreateInput) {
  return prisma.video.create({ data });
}
