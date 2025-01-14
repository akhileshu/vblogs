"use server";

import { Response } from "@/server-actions/types/response";
import { UserInterestServiceImplementation ,UserInterestServiceReturnType } from "@/services/prisma/user-interest/user-interest-service";import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/server-actions/utils/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

export const getUserInterestByIdHandler = async (
  id: string
): Promise<
  Response<
       UserInterestServiceReturnType<"getUserInterestById">
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return failure("Invalid ID format");
    const userInterestService = new UserInterestServiceImplementation(prisma);
    return { success: true, data: await userInterestService.getUserInterestById(validatedId) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler