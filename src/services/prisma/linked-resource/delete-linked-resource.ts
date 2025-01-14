import type{ PrismaClient } from "@prisma/client";

export async function deleteLinkedResource(prisma: PrismaClient, id: string) {
  try{
     return prisma.linkedResource.delete({ where: { id } });
  }catch(error){
    throw error
  }
}
