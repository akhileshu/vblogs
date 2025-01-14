"use server";

import { Response } from "@/server-actions/types/response";
import { TagServiceImplementation ,TagServiceReturnType} from "@/services/prisma/tag/tag-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllTagsHandler = async (
): Promise<
  Response<
      TagServiceReturnType<"getAllTags">
  >
> => {
  try {

    const tagService = new TagServiceImplementation(prisma);
    return { success: true, data: await tagService.getAllTags() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler