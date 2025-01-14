"use server";

import { Response } from "@/server-actions/types/response";
import { UserServiceImplementation ,UserServiceReturnType } from "@/services/prisma/user/user-service";import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const UpdateUserSchema = z.object({
id: z.string().uuid(),
});

export const updateUserHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
       UserServiceReturnType<"updateUser">,
    z.infer<typeof UpdateUserSchema>
  >
> => {
  try {
    const { data: {id,...validatedData}, error } = UpdateUserSchema.safeParse(formData);
    if (error) return failureWithFieldErrors(error);
    const userService = new UserServiceImplementation(prisma);
    return { success: true, data: await userService.updateUser(id,validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler