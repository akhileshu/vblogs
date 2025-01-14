import type{ PrismaClient } from "@prisma/client";

export async function deleteBlogBookmarkList(prisma: PrismaClient, id: string) {
  try{
     return prisma.blogBookmarkList.delete({ where: { id } });
  }catch(error){
    throw error
  }
}
