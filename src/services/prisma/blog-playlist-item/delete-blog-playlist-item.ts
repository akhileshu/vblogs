import type{ PrismaClient } from "@prisma/client";

export async function deleteBlogPlaylistItem(prisma: PrismaClient, id: string) {
  try{
     return prisma.blogPlaylistItem.delete({ where: { id } });
  }catch(error){
    throw error
  }
}
