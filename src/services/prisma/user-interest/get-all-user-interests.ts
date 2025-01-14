import type{ PrismaClient } from "@prisma/client";

export async function getAllUserInterests(prisma: PrismaClient) {
  try{
  return prisma.userInterest.findMany();
  }catch(error){
    throw error
  }
}
