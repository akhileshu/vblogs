import { PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { UpdateBlogBookmarkListSchemaType } from "@/shared/types/models/blog-bookmark-list";


export async function updateBlogBookmarkList(prisma: PrismaClient, id: string, data: Prisma.BlogBookmarkListUpdateInput) {
  try{
    const fieldErrors: FieldErrors<UpdateBlogBookmarkListSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
    return prisma.blogBookmarkList.update({ where: { id }, data });
  }catch(error){
    throw error
  }
}
