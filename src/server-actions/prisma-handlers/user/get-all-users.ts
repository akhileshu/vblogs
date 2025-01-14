"use server";

import { Response } from "@/server-actions/types/response";
import { UserServiceImplementation ,UserServiceReturnType} from "@/services/prisma/user/user-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllUsersHandler = async (
): Promise<
  Response<
      UserServiceReturnType<"getAllUsers">
  >
> => {
  try {

    const userService = new UserServiceImplementation(prisma);
    return { success: true, data: await userService.getAllUsers() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler