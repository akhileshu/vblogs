import type{ PrismaClient } from "@prisma/client";

export async function getAllTopics(prisma: PrismaClient) {
  try{
  return prisma.topic.findMany();
  }catch(error){
    throw error
  }
}
