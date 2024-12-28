"use server";

import { Response } from "@/server-actions/types/response";
import { UserService } from "@/services/prisma/user/user-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const CreateUserSchema = z.object({

});

export const createUserHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<UserService["createUser"]>>,
    z.infer<typeof CreateUserSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateUserSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const userService = new UserService(prisma);
    return { success: true, data: await userService.createUser(validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
