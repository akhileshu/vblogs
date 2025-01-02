import { generateIdFromText } from "@/features/blog/richText/utils/generate-id-from-text";
import { AddBlogMetadataInput } from "@/shared/types/models/blog";
import type { PrismaClient } from "@prisma/client";

export async function addBlogMetadata(
  prisma: PrismaClient,
  { tagIds, title, topicId }: AddBlogMetadataInput,
  authorId: string
) {
  try {
    const blogData = await prisma.blog.create({
      data: {
        slug: generateIdFromText(title),
        title,
        topicId,
        authorId,
        tags: {
          create: tagIds.map((tagId) => ({
            tagId,
          })),
        },
      },
    });
    return blogData;
  } catch (error) {
    throw error;
  }
}
