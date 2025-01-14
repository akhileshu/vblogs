import type{ PrismaClient } from "@prisma/client";

export async function getBlogReadHistoryById(prisma: PrismaClient, id: string) {
  try{
  return prisma.blogReadHistory.findUnique({ where: { id } });
  }catch(error){
    throw error
  }
}
