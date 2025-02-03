"use server";

import { Response } from "@/server-actions/types/response";
import { UserInterestServiceImplementation ,UserInterestServiceReturnType} from "@/services/prisma/user-interest/user-interest-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
} from "@/server-actions/utils/response";

export const getLoggedInUserInterestsHandler = async (

): Promise<
  Response<
    UserInterestServiceReturnType<"getLoggedInUserInterests">
  >
> => {
  try {
    const userInterestService = new UserInterestServiceImplementation(prisma);
    return { success: true, data: await userInterestService.getLoggedInUserInterests() };
  } catch (error) {
   return failure(error)
  }
};

// End of handler
import { unstable_cache } from "next/cache";

export const getCachedLoggedInUserInterestsHandler = async () => {
  const tag = `get-logged-in-user-interests`; // Tag for revalidation , concat params
  return unstable_cache(
    () => getLoggedInUserInterestsHandler(),
    [], // Cache key dependency i.e params
    { tags: [tag] } 
  )();
};
