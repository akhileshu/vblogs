import type{ PrismaClient } from "@prisma/client";

export async function getBlogBookmarkById(prisma: PrismaClient, id: string) {
  try{
  return prisma.blogBookmark.findUnique({ where: { id } });
  }catch(error){
    throw error
  }
}
