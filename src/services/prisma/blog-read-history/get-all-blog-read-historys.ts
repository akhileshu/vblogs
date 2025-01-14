import type{ PrismaClient } from "@prisma/client";

export async function getAllBlogReadHistorys(prisma: PrismaClient) {
  try{
  return prisma.blogReadHistory.findMany();
  }catch(error){
    throw error
  }
}
