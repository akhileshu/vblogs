"use server";

import { Response } from "@/server-actions/types/response";
import { LinkedResourceServiceImplementation ,LinkedResourceServiceReturnType} from "@/services/prisma/linked-resource/linked-resource-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllLinkedResourcesHandler = async (
): Promise<
  Response<
      LinkedResourceServiceReturnType<"getAllLinkedResources">
  >
> => {
  try {

    const linkedResourceService = new LinkedResourceServiceImplementation(prisma);
    return { success: true, data: await linkedResourceService.getAllLinkedResources() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler