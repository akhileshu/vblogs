import type{ PrismaClient } from "@prisma/client";

export async function getAllBlogPlaylists(prisma: PrismaClient) {
  try{
  return prisma.blogPlaylist.findMany();
  }catch(error){
    throw error
  }
}
