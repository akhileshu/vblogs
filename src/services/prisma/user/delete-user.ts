import type{ PrismaClient } from "@prisma/client";

export async function deleteUser(prisma: PrismaClient, id: string) {
  try{
     return prisma.user.delete({ where: { id } });
  }catch(error){
    throw error
  }
}
