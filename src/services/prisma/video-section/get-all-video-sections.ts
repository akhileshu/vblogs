import type{ PrismaClient } from "@prisma/client";

export async function getAllVideoSections(prisma: PrismaClient) {
  try{
  return prisma.videoSection.findMany();
  }catch(error){
    throw error
  }
}
