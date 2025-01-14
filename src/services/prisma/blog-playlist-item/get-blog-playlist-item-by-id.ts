import type{ PrismaClient } from "@prisma/client";

export async function getBlogPlaylistItemById(prisma: PrismaClient, id: string) {
  try{
  return prisma.blogPlaylistItem.findUnique({ where: { id } });
  }catch(error){
    throw error
  }
}
