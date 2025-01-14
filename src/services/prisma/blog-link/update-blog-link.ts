import { PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { UpdateBlogLinkSchemaType } from "@/shared/types/models/blog-link";


export async function updateBlogLink(prisma: PrismaClient, id: string, data: Prisma.BlogLinkUpdateInput) {
  try{
    const fieldErrors: FieldErrors<UpdateBlogLinkSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
    return prisma.blogLink.update({ where: { id }, data });
  }catch(error){
    throw error
  }
}
