import type{ PrismaClient } from "@prisma/client";

export async function getAllVideoSections(prisma: PrismaClient) {
  return prisma.videoSection.findMany();
}
