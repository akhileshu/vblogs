import { PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { UpdateBlogContentSchemaType } from "@/shared/types/models/blog-content";


export async function updateBlogContent(prisma: PrismaClient, id: string, data: Prisma.BlogContentUpdateInput) {
  try{
    const fieldErrors: FieldErrors<UpdateBlogContentSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
    return prisma.blogContent.update({ where: { id }, data });
  }catch(error){
    throw error
  }
}
