import type{ PrismaClient } from "@prisma/client";

export async function getAllTags(prisma: PrismaClient) {
  try{
  return prisma.tag.findMany();
  }catch(error){
    throw error
  }
}
