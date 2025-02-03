"use server";

import { Response } from "@/server-actions/types/response";
import {
  LinkedResourceServiceImplementation,
  LinkedResourceServiceReturnType,
} from "@/services/prisma/linked-resource/linked-resource-service";
import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/shared/lib/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

export const getLinkedResourceByIdHandler = async (
  id: string
): Promise<
  Response<LinkedResourceServiceReturnType<"getLinkedResourceById">>
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error) return failure("Invalid ID format");
    const linkedResourceService = new LinkedResourceServiceImplementation(
      prisma
    );
    return {
      success: true,
      data: await linkedResourceService.getLinkedResourceById(validatedId),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
