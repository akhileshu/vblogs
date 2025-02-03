"use server";

import { Response } from "@/server-actions/types/response";
import { TechnologyService } from "@/services/prisma/technology/technology-service";
import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";

export const getTechnologiesByGoalIdHandler = async (
  goalId: string
): Promise<
  Response<Awaited<ReturnType<TechnologyService["getTechnologiesByGoalId"]>>>
> => {
  try {
    const technologyService = new TechnologyService(prisma);
    return {
      success: true,
      data: await technologyService.getTechnologiesByGoalId(goalId),
    };
  } catch (error) {
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};

// End of handler
import { unstable_cache } from "next/cache";

//doesn't seems beneficial to have this cached because it depends on goalId 
export const getCachedTechnologiesByGoalIdHandler = async (goalId: string) => {
  const tag = `get-technologies-by-goal-id`; // Tag for revalidation , concat params
  return unstable_cache(
    () => getTechnologiesByGoalIdHandler(goalId),
    [], // Cache key dependency i.e params
    { tags: [tag] }
  )();
};

