import type{ PrismaClient } from "@prisma/client";

export async function getAllLinkedResources(prisma: PrismaClient) {
  try{
  return prisma.linkedResource.findMany();
  }catch(error){
    throw error
  }
}
