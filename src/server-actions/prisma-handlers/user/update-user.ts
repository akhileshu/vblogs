"use server";

import { Response } from "@/server-actions/types/response";
import { UserService } from "@/services/prisma/user/user-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const UpdateUserSchema = z.object({
id: z.string().uuid(),
});

export const updateUserHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<UserService["updateUser"]>>,
    z.infer<typeof UpdateUserSchema>
  >
> => {
  try {
    const { data: {id,...validatedData}, error } = UpdateUserSchema.safeParse(formData);
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const userService = new UserService(prisma);
    return { success: true, data: await userService.updateUser(id,validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
