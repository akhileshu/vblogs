import { PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { UpdateBlogPlaylistSchemaType } from "@/shared/types/models/blog-playlist";


export async function updateBlogPlaylist(prisma: PrismaClient, id: string, data: Prisma.BlogPlaylistUpdateInput) {
  try{
    const fieldErrors: FieldErrors<UpdateBlogPlaylistSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
    return prisma.blogPlaylist.update({ where: { id }, data });
  }catch(error){
    throw error
  }
}
