import type{ PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { CreateBlogContentSchemaType } from "@/shared/types/models/blog-content";

export async function createBlogContent(prisma: PrismaClient, data: Prisma.BlogContentCreateInput) {
  try{
    const fieldErrors: FieldErrors<CreateBlogContentSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
  return prisma.blogContent.create({ data });
  } catch (error) {
    throw error
  }
}
