import type{ PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { CreateBlogBookmarkListSchemaType } from "@/shared/types/models/blog-bookmark-list";

export async function createBlogBookmarkList(prisma: PrismaClient, data: Prisma.BlogBookmarkListCreateInput) {
  try{
    const fieldErrors: FieldErrors<CreateBlogBookmarkListSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
  return prisma.blogBookmarkList.create({ data });
  } catch (error) {
    throw error
  }
}
