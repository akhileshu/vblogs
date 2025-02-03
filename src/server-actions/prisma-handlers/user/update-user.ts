"use server";

import { Response } from "@/server-actions/types/response";
import {
  UserServiceImplementation,
  UserServiceReturnType,
} from "@/services/prisma/user/user-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { UpdateUserSchema } from "@/shared/types/models/user";
import { isEmptyObj } from "@/shared/utils/isEmpty";

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
    const { data: validatedData, error } = UpdateUserSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error) return failureWithFieldErrors(error);
    if (isEmptyObj(validatedData)) return failure("No data to update");
    const userService = new UserServiceImplementation(prisma);
    return { success: true, data: await userService.updateUser(validatedData) };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
