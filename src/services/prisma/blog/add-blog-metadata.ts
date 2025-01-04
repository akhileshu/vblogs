import { generateIdFromText } from "@/features/blog/richText/utils/generate-id-from-text";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { AddBlogMetadataInput, AddBlogMetadataSchemaType } from "@/shared/types/models/blog";
import type { PrismaClient } from "@prisma/client";

export async function addBlogMetadata(
  prisma: PrismaClient,
  { tagIds, title, topicId }: AddBlogMetadataInput,
  authorId: string
) {
  try {
/* 
    const fieldErrors: FieldErrors<AddBlogMetadataSchemaType> = {};
    if (!title || true) {
      fieldErrors.title = ["Title failed at bussiness logic validation"];
    }
    if (!topicId || true) {
      fieldErrors.topicId = ["Topic failed at bussiness logic validation"];
    }
    if (tagIds.length === 0 || true) {
      fieldErrors.tagIds = ["Tags failed at bussiness logic validation"];
    }
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
     */
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
