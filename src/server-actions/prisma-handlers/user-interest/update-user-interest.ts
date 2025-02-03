"use server";

import { Response } from "@/server-actions/types/response";
import {
  UserInterestServiceImplementation,
  UserInterestServiceReturnType,
} from "@/services/prisma/user-interest/user-interest-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const UpdateUserInterestSchema = z.object({
  id: z.string().uuid(),
});

export const updateUserInterestHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    UserInterestServiceReturnType<"updateUserInterest">,
    z.infer<typeof UpdateUserInterestSchema>
  >
> => {
  try {
    const {
      data: { id, ...validatedData },
      error,
    } = UpdateUserInterestSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) return failureWithFieldErrors(error);
    const userInterestService = new UserInterestServiceImplementation(prisma);
    return {
      success: true,
      data: await userInterestService.updateUserInterest(id, validatedData),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
