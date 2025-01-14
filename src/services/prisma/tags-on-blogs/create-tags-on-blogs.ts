import type{ PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { CreateTagsOnBlogsSchemaType } from "@/shared/types/models/tags-on-blogs";

export async function createTagsOnBlogs(prisma: PrismaClient, data: Prisma.TagsOnBlogsCreateInput) {
  try{
    const fieldErrors: FieldErrors<CreateTagsOnBlogsSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
  return prisma.tagsOnBlogs.create({ data });
  } catch (error) {
    throw error
  }
}
