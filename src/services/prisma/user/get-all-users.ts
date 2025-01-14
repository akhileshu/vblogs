import type{ PrismaClient } from "@prisma/client";

export async function getAllUsers(prisma: PrismaClient) {
  try{
  return prisma.user.findMany();
  }catch(error){
    throw error
  }
}
