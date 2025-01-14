"use server";

import { Response } from "@/server-actions/types/response";
import { LinkedResourceServiceImplementation,LinkedResourceServiceReturnType } from "@/services/prisma/linked-resource/linked-resource-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const CreateLinkedResourceSchema = z.object({

});

export const createLinkedResourceHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    LinkedResourceServiceReturnType<"createLinkedResource">,
    z.infer<typeof CreateLinkedResourceSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateLinkedResourceSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error) return failureWithFieldErrors(error);
    const linkedResourceService = new LinkedResourceServiceImplementation(prisma);
    return { success: true, data: await linkedResourceService.createLinkedResource(validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler