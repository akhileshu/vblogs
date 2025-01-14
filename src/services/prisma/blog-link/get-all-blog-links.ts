import type{ PrismaClient } from "@prisma/client";

export async function getAllBlogLinks(prisma: PrismaClient) {
  try{
  return prisma.blogLink.findMany();
  }catch(error){
    throw error
  }
}
