"use server";

import { Response } from "@/server-actions/types/response";
import { UserInterestServiceImplementation ,UserInterestServiceReturnType} from "@/services/prisma/user-interest/user-interest-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllUserInterestsHandler = async (
): Promise<
  Response<
      UserInterestServiceReturnType<"getAllUserInterests">
  >
> => {
  try {

    const userInterestService = new UserInterestServiceImplementation(prisma);
    return { success: true, data: await userInterestService.getAllUserInterests() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler