import type{ PrismaClient } from "@prisma/client";

export async function getUserInterestById(prisma: PrismaClient, id: string) {
  try{
  return prisma.userInterest.findUnique({ where: { id } });
  }catch(error){
    throw error
  }
}
