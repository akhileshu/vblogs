"use server";

import { Response } from "@/server-actions/types/response";
import { UserInterestService } from "@/services/prisma/user-interest/user-interest-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";


export const getAllUserInterestsHandler = async (
): Promise<
  Response<
    Awaited<ReturnType<UserInterestService["getAllUserInterests"]>>
  >
> => {
  try {

    const userInterestService = new UserInterestService(prisma);
    return { success: true, data: await userInterestService.getAllUserInterests() };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
