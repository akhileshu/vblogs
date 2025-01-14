import type{ PrismaClient } from "@prisma/client";

export async function deleteUserInterest(prisma: PrismaClient, id: string) {
  try{
     return prisma.userInterest.delete({ where: { id } });
  }catch(error){
    throw error
  }
}
