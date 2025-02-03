"use server";

import { Response } from "@/server-actions/types/response";
import { TagService } from "@/services/prisma/tag/tag-service";
import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { IdSchema } from "@/shared/lib/zod";

export const getTagByIdHandler = async (
  id: string
): Promise<Response<Awaited<ReturnType<TagService["getTagById"]>>>> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return {
        success: false,
        errorMsg: "Invalid ID format",
      };
    const tagService = new TagService(prisma);
    return { success: true, data: await tagService.getTagById(validatedId) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
