"use server";

import { Response } from "@/server-actions/types/response";
import { UserInterestService } from "@/services/prisma/user-interest/user-interest-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const UpdateUserInterestSchema = z.object({
id: z.string().uuid(),
});

export const updateUserInterestHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<UserInterestService["updateUserInterest"]>>,
    z.infer<typeof UpdateUserInterestSchema>
  >
> => {
  try {
    const { data: {id,...validatedData}, error } = UpdateUserInterestSchema.safeParse(formData);
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const userInterestService = new UserInterestService(prisma);
    return { success: true, data: await userInterestService.updateUserInterest(id,validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
