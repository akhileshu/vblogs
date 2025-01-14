import type{ PrismaClient } from "@prisma/client";

export async function getAllBlogContents(prisma: PrismaClient) {
  try{
  return prisma.blogContent.findMany();
  }catch(error){
    throw error
  }
}
