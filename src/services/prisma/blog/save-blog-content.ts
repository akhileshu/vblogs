import { SaveBlogContentInput } from "@/shared/types/models/blog";
import type { PrismaClient } from "@prisma/client";

export async function saveBlogContent(prisma: PrismaClient, {content,slug}: SaveBlogContentInput) {
 try {
  const blogData = await prisma.blog.update({
    where: {
      slug,
    },
    data: {
      content: {
        upsert: {
          update: {
            fullContent: JSON.parse(content),
          },
          create: {
            fullContent: JSON.parse(content),
          },
        },
      },
    },
  });
  return blogData;
 } catch (error) {
  throw error
 }
}
