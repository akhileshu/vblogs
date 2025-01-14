import type{ PrismaClient } from "@prisma/client";

export async function deleteBlogPlaylist(prisma: PrismaClient, id: string) {
  try{
     return prisma.blogPlaylist.delete({ where: { id } });
  }catch(error){
    throw error
  }
}
