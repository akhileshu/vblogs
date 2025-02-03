"use server";

import { Response } from "@/server-actions/types/response";
import { TagService } from "@/services/prisma/tag/tag-service";
import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const UpdateTagSchema = z.object({
  id: z.string().uuid(),
});

export const updateTagHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<TagService["updateTag"]>>,
    z.infer<typeof UpdateTagSchema>
  >
> => {
  try {
    const {
      data: { id, ...validatedData },
      error,
    } = UpdateTagSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const tagService = new TagService(prisma);
    return {
      success: true,
      data: await tagService.updateTag(id, validatedData),
    };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
