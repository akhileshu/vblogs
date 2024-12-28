"use server";

import { Response } from "@/server-actions/types/response";
import { UserService } from "@/services/prisma/user/user-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";


export const getAllUsersHandler = async (
): Promise<
  Response<
    Awaited<ReturnType<UserService["getAllUsers"]>>
  >
> => {
  try {

    const userService = new UserService(prisma);
    return { success: true, data: await userService.getAllUsers() };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
