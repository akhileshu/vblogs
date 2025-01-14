import type{ PrismaClient } from "@prisma/client";

export async function getVideoById(prisma: PrismaClient, id: string) {
  try{
  return prisma.video.findUnique({ where: { id } });
  }catch(error){
    throw error
  }
}
