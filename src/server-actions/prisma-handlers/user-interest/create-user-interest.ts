"use server";

import { Response } from "@/server-actions/types/response";
import { UserInterestService } from "@/services/prisma/user-interest/user-interest-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const CreateUserInterestSchema = z.object({

});

export const createUserInterestHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<UserInterestService["createUserInterest"]>>,
    z.infer<typeof CreateUserInterestSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateUserInterestSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const userInterestService = new UserInterestService(prisma);
    return { success: true, data: await userInterestService.createUserInterest(validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
