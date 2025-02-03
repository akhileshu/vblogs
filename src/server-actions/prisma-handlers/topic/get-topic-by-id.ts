"use server";

import { Response } from "@/server-actions/types/response";
import { TopicService } from "@/services/prisma/topic/topic-service";
import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { IdSchema } from "@/shared/lib/zod";

export const getTopicByIdHandler = async (
  id: string
): Promise<Response<Awaited<ReturnType<TopicService["getTopicById"]>>>> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return {
        success: false,
        errorMsg: "Invalid ID format",
      };
    const topicService = new TopicService(prisma);
    return {
      success: true,
      data: await topicService.getTopicById(validatedId),
    };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
