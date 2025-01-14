import type{ PrismaClient } from "@prisma/client";

export async function getAllVideos(prisma: PrismaClient) {
  try{
  return prisma.video.findMany();
  }catch(error){
    throw error
  }
}
