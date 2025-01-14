import type{ PrismaClient } from "@prisma/client";

export async function getAllBlogPlaylistItems(prisma: PrismaClient) {
  try{
  return prisma.blogPlaylistItem.findMany();
  }catch(error){
    throw error
  }
}
