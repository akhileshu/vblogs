import type{ PrismaClient } from "@prisma/client";

export async function getLoggedInUserInterests(prisma: PrismaClient, userId:string) {
  try{
    return await prisma.userInterest.findMany({
      where:{
        userId
      },include:{
        technology:true,
        topic:true
      }
    })
  }catch(error){
    throw error
  }
  
}
