"use server";

import { Response } from "@/server-actions/types/response";
import { TagService } from "@/services/prisma/tag/tag-service";
import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";

export const getTagsByTopicIdHandler = async (
  topicId: string
): Promise<Response<Awaited<ReturnType<TagService["getTagsByTopicId"]>>>> => {
  try {
    const tagService = new TagService(prisma);
    return {
      success: true,
      data: await tagService.getTagsByTopicId(topicId),
    };
  } catch (error) {
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
