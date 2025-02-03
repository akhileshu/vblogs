"use server";

import { Response } from "@/server-actions/types/response";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { UserInterestServiceImplementation, UserInterestServiceReturnType } from "@/services/prisma/user-interest/user-interest-service";
import { FieldsError } from "@/shared/lib/errors/customError";
import prisma from "@/shared/lib/prisma";
import { DeleteUserInterestSchema } from "@/shared/types/models/user-interest";



export const deleteUserInterestHandler = async (
   prevState: unknown,
  formData: FormData
): Promise<
  Response<
      UserInterestServiceReturnType<"deleteUserInterest">
  >
> => {
  try {
    const { data: validatedData, error } = DeleteUserInterestSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error)
      return failure("Invalid ID format");
    const userInterestService = new UserInterestServiceImplementation(prisma);
    return { success: true, data: await userInterestService.deleteUserInterest(validatedData.userInterestId) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler