import type{ PrismaClient } from "@prisma/client";

export async function getVideoSectionById(prisma: PrismaClient, id: string) {
  try{
  return prisma.videoSection.findUnique({ where: { id } });
  }catch(error){
    throw error
  }
}
