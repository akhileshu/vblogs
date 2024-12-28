"use server";

import { Response } from "@/server-actions/types/response";
import { TagService } from "@/services/prisma/tag/tag-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";


export const getAllTagsHandler = async (
): Promise<
  Response<
    Awaited<ReturnType<TagService["getAllTags"]>>
  >
> => {
  try {

    const tagService = new TagService(prisma);
    return { success: true, data: await tagService.getAllTags() };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
