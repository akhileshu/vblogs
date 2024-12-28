"use server";

import { Response } from "@/server-actions/types/response";
import { TopicService } from "@/services/prisma/topic/topic-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";


export const getAllTopicsHandler = async (
): Promise<
  Response<
    Awaited<ReturnType<TopicService["getAllTopics"]>>
  >
> => {
  try {

    const topicService = new TopicService(prisma);
    return { success: true, data: await topicService.getAllTopics() };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
