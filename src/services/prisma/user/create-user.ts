import type{ PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { CreateUserSchemaType } from "@/shared/types/models/user";

export async function createUser(prisma: PrismaClient, data: Prisma.UserCreateInput) {
  try{
    const fieldErrors: FieldErrors<CreateUserSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
  return prisma.user.create({ data });
  } catch (error) {
    throw error
  }
}
