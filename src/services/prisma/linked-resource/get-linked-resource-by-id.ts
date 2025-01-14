import type{ PrismaClient } from "@prisma/client";

export async function getLinkedResourceById(prisma: PrismaClient, id: string) {
  try{
  return prisma.linkedResource.findUnique({ where: { id } });
  }catch(error){
    throw error
  }
}
