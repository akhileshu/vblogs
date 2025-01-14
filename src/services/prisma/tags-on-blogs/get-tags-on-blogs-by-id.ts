import type{ PrismaClient } from "@prisma/client";

export async function getTagsOnBlogsById(prisma: PrismaClient, id: string) {
  try{
  return prisma.tagsOnBlogs.findUnique({ where: { id } });
  }catch(error){
    throw error
  }
}
