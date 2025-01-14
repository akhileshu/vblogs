import type{ PrismaClient } from "@prisma/client";

export async function deleteBlogLink(prisma: PrismaClient, id: string) {
  try{
     return prisma.blogLink.delete({ where: { id } });
  }catch(error){
    throw error
  }
}
