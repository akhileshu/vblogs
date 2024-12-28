import type{ PrismaClient } from "@prisma/client";

export async function deleteVideoSection(prisma: PrismaClient, id: string) {
  return prisma.videoSection.delete({ where: { id } });
}
