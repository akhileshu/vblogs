import type{ PrismaClient } from "@prisma/client";

export async function getVideoSectionById(prisma: PrismaClient, id: string) {
  return prisma.videoSection.findUnique({ where: { id } });
}
