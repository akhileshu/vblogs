"use server";

import { Response } from "@/server-actions/types/response";
import { UserServiceImplementation,UserServiceReturnType } from "@/services/prisma/user/user-service";import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/server-actions/utils/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { z } from "zod";

const DeleteUserSchema = z.object({
  blogId: IdSchema
});

export const deleteUserHandler = async (
   prevState: unknown,
  formData: FormData
): Promise<
  Response<
      UserServiceReturnType<"deleteUser">
  >
> => {
  try {
    const { data: validatedData, error } = DeleteUserSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error)
      return failure("Invalid ID format");
    const userService = new UserServiceImplementation(prisma);
    return { success: true, data: await userService.deleteUser(validatedData.id) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler