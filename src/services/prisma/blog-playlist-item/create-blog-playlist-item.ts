import type{ PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { CreateBlogPlaylistItemSchemaType } from "@/shared/types/models/blog-playlist-item";

export async function createBlogPlaylistItem(prisma: PrismaClient, data: Prisma.BlogPlaylistItemCreateInput) {
  try{
    const fieldErrors: FieldErrors<CreateBlogPlaylistItemSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
  return prisma.blogPlaylistItem.create({ data });
  } catch (error) {
    throw error
  }
}
