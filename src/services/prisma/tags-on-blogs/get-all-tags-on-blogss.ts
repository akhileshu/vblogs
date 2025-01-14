import type{ PrismaClient } from "@prisma/client";

export async function getAllTagsOnBlogss(prisma: PrismaClient) {
  try{
  return prisma.tagsOnBlogs.findMany();
  }catch(error){
    throw error
  }
}
