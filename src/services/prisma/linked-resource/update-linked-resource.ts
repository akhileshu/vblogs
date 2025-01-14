import { PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { UpdateLinkedResourceSchemaType } from "@/shared/types/models/linked-resource";


export async function updateLinkedResource(prisma: PrismaClient, id: string, data: Prisma.LinkedResourceUpdateInput) {
  try{
    const fieldErrors: FieldErrors<UpdateLinkedResourceSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
    return prisma.linkedResource.update({ where: { id }, data });
  }catch(error){
    throw error
  }
}
