import { PrismaClient, Prisma } from "@prisma/client";

export async function updateVideo(prisma: PrismaClient, id: string, data: Prisma.VideoUpdateInput) {
  return prisma.video.update({ where: { id }, data });
}
