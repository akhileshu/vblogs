import type{ PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { CreateBlogBookmarkSchemaType } from "@/shared/types/models/blog-bookmark";

export async function createBlogBookmark(prisma: PrismaClient, data: Prisma.BlogBookmarkCreateInput) {
  try{
    const fieldErrors: FieldErrors<CreateBlogBookmarkSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
  return prisma.blogBookmark.create({ data });
  } catch (error) {
    throw error
  }
}
