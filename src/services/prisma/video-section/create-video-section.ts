import type{ PrismaClient, Prisma } from "@prisma/client";

export async function createVideoSection(prisma: PrismaClient, data: Prisma.VideoSectionCreateInput) {
  return prisma.videoSection.create({ data });
}
