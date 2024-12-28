"use server";

import { Response } from "@/server-actions/types/response";
import { TagService } from "@/services/prisma/tag/tag-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const CreateTagSchema = z.object({

});

export const createTagHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<TagService["createTag"]>>,
    z.infer<typeof CreateTagSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateTagSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const tagService = new TagService(prisma);
    return { success: true, data: await tagService.createTag(validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
