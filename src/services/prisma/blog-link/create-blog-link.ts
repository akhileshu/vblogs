import type{ PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { CreateBlogLinkSchemaType } from "@/shared/types/models/blog-link";

export async function createBlogLink(prisma: PrismaClient, data: Prisma.BlogLinkCreateInput) {
  try{
    const fieldErrors: FieldErrors<CreateBlogLinkSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
  return prisma.blogLink.create({ data });
  } catch (error) {
    throw error
  }
}
