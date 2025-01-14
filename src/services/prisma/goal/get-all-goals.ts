import type{ PrismaClient } from "@prisma/client";

export async function getAllGoals(prisma: PrismaClient) {
  try{
  return prisma.goal.findMany();
  }catch(error){
    throw error
  }
}
