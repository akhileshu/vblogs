"use server";

import { Response } from "@/server-actions/types/response";
import { UserService } from "@/services/prisma/user/user-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { IdSchema } from "@/server-actions/utils/zod";

export const getUserByIdHandler = async (
  id: string
): Promise<
  Response<
    Awaited<ReturnType<UserService["getUserById"]>>
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return {
        success: false,
        errorMsg: "Invalid ID format",
      };
    const userService = new UserService(prisma);
    return { success: true, data: await userService.getUserById(validatedId) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
