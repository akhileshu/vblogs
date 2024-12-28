"use server";

import { Response } from "@/server-actions/types/response";
import { GoalService } from "@/services/prisma/goal/goal-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";


export const getAllGoalsHandler = async (
): Promise<
  Response<
    Awaited<ReturnType<GoalService["getAllGoals"]>>
  >
> => {
  try {

    const goalService = new GoalService(prisma);
    return { success: true, data: await goalService.getAllGoals() };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
