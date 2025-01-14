import type{ PrismaClient } from "@prisma/client";

export async function deleteBlogReadHistory(prisma: PrismaClient, id: string) {
  try{
     return prisma.blogReadHistory.delete({ where: { id } });
  }catch(error){
    throw error
  }
}
