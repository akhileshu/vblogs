import { PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { UpdateBlogPlaylistItemSchemaType } from "@/shared/types/models/blog-playlist-item";


export async function updateBlogPlaylistItem(prisma: PrismaClient, id: string, data: Prisma.BlogPlaylistItemUpdateInput) {
  try{
    const fieldErrors: FieldErrors<UpdateBlogPlaylistItemSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
    return prisma.blogPlaylistItem.update({ where: { id }, data });
  }catch(error){
    throw error
  }
}
