import type{ PrismaClient } from "@prisma/client";

export async function getAllBlogBookmarks(prisma: PrismaClient) {
  try{
  return prisma.blogBookmark.findMany();
  }catch(error){
    throw error
  }
}
