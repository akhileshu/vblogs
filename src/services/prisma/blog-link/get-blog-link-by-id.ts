import type{ PrismaClient } from "@prisma/client";

export async function getBlogLinkById(prisma: PrismaClient, id: string) {
  try{
  return prisma.blogLink.findUnique({ where: { id } });
  }catch(error){
    throw error
  }
}
