import type{ PrismaClient } from "@prisma/client";

export async function getBlogBookmarkListById(prisma: PrismaClient, id: string) {
  try{
  return prisma.blogBookmarkList.findUnique({ where: { id } });
  }catch(error){
    throw error
  }
}
