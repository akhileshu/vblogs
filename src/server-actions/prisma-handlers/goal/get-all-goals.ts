"use server";

import { Response } from "@/server-actions/types/response";
import { GoalServiceImplementation ,GoalServiceReturnType} from "@/services/prisma/goal/goal-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllGoalsHandler = async (
): Promise<
  Response<
      GoalServiceReturnType<"getAllGoals">
  >
> => {
  try {

    const goalService = new GoalServiceImplementation(prisma);
    return { success: true, data: await goalService.getAllGoals() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler