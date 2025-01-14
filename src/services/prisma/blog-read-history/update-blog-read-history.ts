import { PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { UpdateBlogReadHistorySchemaType } from "@/shared/types/models/blog-read-history";


export async function updateBlogReadHistory(prisma: PrismaClient, id: string, data: Prisma.BlogReadHistoryUpdateInput) {
  try{
    const fieldErrors: FieldErrors<UpdateBlogReadHistorySchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
    return prisma.blogReadHistory.update({ where: { id }, data });
  }catch(error){
    throw error
  }
}
