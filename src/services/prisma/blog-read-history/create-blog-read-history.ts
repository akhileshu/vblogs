import type{ PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { CreateBlogReadHistorySchemaType } from "@/shared/types/models/blog-read-history";

export async function createBlogReadHistory(prisma: PrismaClient, data: Prisma.BlogReadHistoryCreateInput) {
  try{
    const fieldErrors: FieldErrors<CreateBlogReadHistorySchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
  return prisma.blogReadHistory.create({ data });
  } catch (error) {
    throw error
  }
}
