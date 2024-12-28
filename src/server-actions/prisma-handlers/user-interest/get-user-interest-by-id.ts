"use server";

import { Response } from "@/server-actions/types/response";
import { UserInterestService } from "@/services/prisma/user-interest/user-interest-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { IdSchema } from "@/server-actions/utils/zod";

export const getUserInterestByIdHandler = async (
  id: string
): Promise<
  Response<
    Awaited<ReturnType<UserInterestService["getUserInterestById"]>>
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return {
        success: false,
        errorMsg: "Invalid ID format",
      };
    const userInterestService = new UserInterestService(prisma);
    return { success: true, data: await userInterestService.getUserInterestById(validatedId) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
