"use server";

import { Response } from "@/server-actions/types/response";
import { LinkedResourceServiceImplementation ,LinkedResourceServiceReturnType } from "@/services/prisma/linked-resource/linked-resource-service";import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const UpdateLinkedResourceSchema = z.object({
id: z.string().uuid(),
});

export const updateLinkedResourceHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
       LinkedResourceServiceReturnType<"updateLinkedResource">,
    z.infer<typeof UpdateLinkedResourceSchema>
  >
> => {
  try {
    const { data: {id,...validatedData}, error } = UpdateLinkedResourceSchema.safeParse(formData);
    if (error) return failureWithFieldErrors(error);
    const linkedResourceService = new LinkedResourceServiceImplementation(prisma);
    return { success: true, data: await linkedResourceService.updateLinkedResource(id,validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler