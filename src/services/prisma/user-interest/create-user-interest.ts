import type{ PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { CreateUserInterestSchemaType } from "@/shared/types/models/user-interest";

export async function createUserInterest(prisma: PrismaClient, data: Prisma.UserInterestCreateInput) {
  try{
    const fieldErrors: FieldErrors<CreateUserInterestSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
  return prisma.userInterest.create({ data });
  } catch (error) {
    throw error
  }
}
