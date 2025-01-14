import type{ PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { CreateLinkedResourceSchemaType } from "@/shared/types/models/linked-resource";

export async function createLinkedResource(prisma: PrismaClient, data: Prisma.LinkedResourceCreateInput) {
  try{
    const fieldErrors: FieldErrors<CreateLinkedResourceSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
  return prisma.linkedResource.create({ data });
  } catch (error) {
    throw error
  }
}
