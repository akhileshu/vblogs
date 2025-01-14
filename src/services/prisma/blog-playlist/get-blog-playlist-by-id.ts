import type{ PrismaClient } from "@prisma/client";

export async function getBlogPlaylistById(prisma: PrismaClient, id: string) {
  try{
  return prisma.blogPlaylist.findUnique({ where: { id } });
  }catch(error){
    throw error
  }
}
