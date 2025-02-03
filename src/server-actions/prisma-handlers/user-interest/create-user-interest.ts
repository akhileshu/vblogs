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
import { CreateUserInterestSchema } from "@/shared/types/models/user-interest";

export const createUserInterestHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    UserInterestServiceReturnType<"createUserInterest">,
    z.infer<typeof CreateUserInterestSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateUserInterestSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) return failureWithFieldErrors(error);
    if (!validatedData.topicIds?.length && !validatedData.technologyIds?.length)
      return failure(
        "At least one field (topicIdsCsv or technologyIdsCsv) must be provided."
      );
    const userInterestService = new UserInterestServiceImplementation(prisma);
    return {
      success: true,
      data: await userInterestService.createUserInterest(validatedData),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
