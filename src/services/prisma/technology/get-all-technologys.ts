import type{ PrismaClient } from "@prisma/client";

export async function getAllTechnologys(prisma: PrismaClient) {
  try{
  return prisma.technology.findMany();
  }catch(error){
    throw error
  }
}
