"use server";

import { Response } from "@/server-actions/types/response";
import { GoalService } from "@/services/prisma/goal/goal-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const CreateGoalSchema = z.object({

});

export const createGoalHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<GoalService["createGoal"]>>,
    z.infer<typeof CreateGoalSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateGoalSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const goalService = new GoalService(prisma);
    return { success: true, data: await goalService.createGoal(validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
