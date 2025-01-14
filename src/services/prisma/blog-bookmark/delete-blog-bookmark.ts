import type{ PrismaClient } from "@prisma/client";

export async function deleteBlogBookmark(prisma: PrismaClient, id: string) {
  try{
     return prisma.blogBookmark.delete({ where: { id } });
  }catch(error){
    throw error
  }
}
