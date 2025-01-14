import { PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { UpdateUserInterestSchemaType } from "@/shared/types/models/user-interest";


export async function updateUserInterest(prisma: PrismaClient, id: string, data: Prisma.UserInterestUpdateInput) {
  try{
    const fieldErrors: FieldErrors<UpdateUserInterestSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
    return prisma.userInterest.update({ where: { id }, data });
  }catch(error){
    throw error
  }
}
