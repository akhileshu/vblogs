import { PrismaClient } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { UpdateUserSchemaType } from "@/shared/types/models/user";


export async function updateUser(prisma: PrismaClient, data: UpdateUserSchemaType , id: string) {
  try {
    const fieldErrors: FieldErrors<UpdateUserSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
    let image: string | undefined = undefined;
    if(data.image){
      //upload image and geturl
      image='url'
    }
    return prisma.user.update({ where: { id }, data:{
      name: data.name,
      image
    } });
  } catch (error) {
    throw error;
  }
}
