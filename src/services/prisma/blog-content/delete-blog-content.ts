import type{ PrismaClient } from "@prisma/client";

export async function deleteBlogContent(prisma: PrismaClient, id: string) {
  try{
     return prisma.blogContent.delete({ where: { id } });
  }catch(error){
    throw error
  }
}
