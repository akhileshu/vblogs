"use server";

import { Response } from "@/server-actions/types/response";
import { UserServiceImplementation,UserServiceReturnType } from "@/services/prisma/user/user-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const CreateUserSchema = z.object({

});

export const createUserHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    UserServiceReturnType<"createUser">,
    z.infer<typeof CreateUserSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateUserSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error) return failureWithFieldErrors(error);
    const userService = new UserServiceImplementation(prisma);
    return { success: true, data: await userService.createUser(validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler