import { PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { UpdateBlogBookmarkSchemaType } from "@/shared/types/models/blog-bookmark";


export async function updateBlogBookmark(prisma: PrismaClient, id: string, data: Prisma.BlogBookmarkUpdateInput) {
  try{
    const fieldErrors: FieldErrors<UpdateBlogBookmarkSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
    return prisma.blogBookmark.update({ where: { id }, data });
  }catch(error){
    throw error
  }
}
