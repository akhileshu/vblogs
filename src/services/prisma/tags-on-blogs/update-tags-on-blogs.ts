import { PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { UpdateTagsOnBlogsSchemaType } from "@/shared/types/models/tags-on-blogs";


export async function updateTagsOnBlogs(prisma: PrismaClient, id: string, data: Prisma.TagsOnBlogsUpdateInput) {
  try{
    const fieldErrors: FieldErrors<UpdateTagsOnBlogsSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
    return prisma.tagsOnBlogs.update({ where: { id }, data });
  }catch(error){
    throw error
  }
}
