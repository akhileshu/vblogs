"use server";

import { Response } from "@/server-actions/types/response";
import { GoalService } from "@/services/prisma/goal/goal-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { IdSchema } from "@/server-actions/utils/zod";

export const getGoalByIdHandler = async (
  id: string
): Promise<
  Response<
    Awaited<ReturnType<GoalService["getGoalById"]>>
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return {
        success: false,
        errorMsg: "Invalid ID format",
      };
    const goalService = new GoalService(prisma);
    return { success: true, data: await goalService.getGoalById(validatedId) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
