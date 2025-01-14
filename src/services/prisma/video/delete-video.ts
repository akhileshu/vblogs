import type{ PrismaClient } from "@prisma/client";

export async function deleteVideo(prisma: PrismaClient, id: string) {
  try{
     return prisma.video.delete({ where: { id } });
  }catch(error){
    throw error
  }
}
