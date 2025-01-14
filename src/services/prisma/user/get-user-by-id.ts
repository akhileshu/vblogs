import type{ PrismaClient } from "@prisma/client";

export async function getUserById(prisma: PrismaClient, id: string) {
  try{
  return prisma.user.findUnique({ where: { id } });
  }catch(error){
    throw error
  }
}
