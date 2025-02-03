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

// End of handler
import { unstable_cache } from "next/cache";

export const getCachedAllGoalsHandler = async () => {
  const tag = `get-all-goals`; // Tag for revalidation , concat params
  return unstable_cache(
    () => getAllGoalsHandler(),
    [], // Cache key dependency i.e params
    { tags: [tag] }
  )();
};