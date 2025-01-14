import type{ PrismaClient } from "@prisma/client";

export async function deleteTagsOnBlogs(prisma: PrismaClient, id: string) {
  try{
     return prisma.tagsOnBlogs.delete({ where: { id } });
  }catch(error){
    throw error
  }
}
