import type{ PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { CreateBlogPlaylistSchemaType } from "@/shared/types/models/blog-playlist";

export async function createBlogPlaylist(prisma: PrismaClient, data: Prisma.BlogPlaylistCreateInput) {
  try{
    const fieldErrors: FieldErrors<CreateBlogPlaylistSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
  return prisma.blogPlaylist.create({ data });
  } catch (error) {
    throw error
  }
}
