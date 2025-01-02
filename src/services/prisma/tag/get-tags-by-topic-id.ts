import type { PrismaClient } from "@prisma/client";

export async function getTagsByTopicId(prisma: PrismaClient, topicId: string) {
 try {
   const tags = await prisma.tag.findMany({
     where: {
       topicId: topicId,
     },
   });
   return tags;
 } catch (error) {
   throw error;
 }
}
