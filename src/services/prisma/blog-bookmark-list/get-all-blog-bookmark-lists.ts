import type{ PrismaClient } from "@prisma/client";

export async function getAllBlogBookmarkLists(prisma: PrismaClient) {
  try{
  return prisma.blogBookmarkList.findMany();
  }catch(error){
    throw error
  }
}
