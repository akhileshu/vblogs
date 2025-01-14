import type{ PrismaClient } from "@prisma/client";

export async function getBlogContentById(prisma: PrismaClient, id: string) {
  try{
  return prisma.blogContent.findUnique({ where: { id } });
  }catch(error){
    throw error
  }
}
