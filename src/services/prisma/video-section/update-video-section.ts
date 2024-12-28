import { PrismaClient, Prisma } from "@prisma/client";

export async function updateVideoSection(prisma: PrismaClient, id: string, data: Prisma.VideoSectionUpdateInput) {
  return prisma.videoSection.update({ where: { id }, data });
}
