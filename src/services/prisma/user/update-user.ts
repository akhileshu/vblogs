import { PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { UpdateUserSchemaType } from "@/shared/types/models/user";


export async function updateUser(prisma: PrismaClient, id: string, data: Prisma.UserUpdateInput) {
  try{
    const fieldErrors: FieldErrors<UpdateUserSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
    return prisma.user.update({ where: { id }, data });
  }catch(error){
    throw error
  }
}
