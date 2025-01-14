import type{ PrismaClient } from "@prisma/client";

export async function deleteVideoSection(prisma: PrismaClient, id: string) {
  try{
     return prisma.videoSection.delete({ where: { id } });
  }catch(error){
    throw error
  }
}
