"use server";

import { Response } from "@/server-actions/types/response";
import { LinkedResourceServiceImplementation,LinkedResourceServiceReturnType } from "@/services/prisma/linked-resource/linked-resource-service";import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/server-actions/utils/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const DeleteLinkedResourceSchema = z.object({
  blogId: IdSchema
});

export const deleteLinkedResourceHandler = async (
   prevState: unknown,
  formData: FormData
): Promise<
  Response<
      LinkedResourceServiceReturnType<"deleteLinkedResource">
  >
> => {
  try {
    const { data: validatedData, error } = DeleteLinkedResourceSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error)
      return failure("Invalid ID format");
    const linkedResourceService = new LinkedResourceServiceImplementation(prisma);
    return { success: true, data: await linkedResourceService.deleteLinkedResource(validatedData.id) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler