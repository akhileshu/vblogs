"use server";

import { Response } from "@/server-actions/types/response";
import { TopicService } from "@/services/prisma/topic/topic-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { IdSchema } from "@/server-actions/utils/zod";



export const deleteTopicHandler = async (
  id: string
): Promise<
  Response<
    Awaited<ReturnType<TopicService["deleteTopic"]>>
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return {
        success: false,
        errorMsg: "Invalid ID format",
      };
    const topicService = new TopicService(prisma);
    return { success: true, data: await topicService.deleteTopic(validatedId) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};