"use server";

import { Response } from "@/server-actions/types/response";
import {
  UserServiceImplementation,
  UserServiceReturnType,
} from "@/services/prisma/user/user-service";
import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/shared/lib/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

export const getUserByIdHandler = async (
  id: string
): Promise<Response<UserServiceReturnType<"getUserById">>> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error) return failure("Invalid ID format");
    const userService = new UserServiceImplementation(prisma);
    return { success: true, data: await userService.getUserById(validatedId) };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
