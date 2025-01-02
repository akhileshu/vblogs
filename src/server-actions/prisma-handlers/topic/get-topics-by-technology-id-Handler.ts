"use server";

import { Response } from "@/server-actions/types/response";
import { failure } from "@/server-actions/utils/response";
import { TopicService } from "@/services/prisma/topic/topic-service";
import prisma from "@/shared/lib/prisma";

export const getTopicsByTechnologyIdHandler = async (
  technologyId: string
): Promise<
  Response<Awaited<ReturnType<TopicService["getTopicsByTechnologyId"]>>>
> => {
  try {
    const topicService = new TopicService(prisma);
    return {
      success: true,
      data: await topicService.getTopicsByTechnologyId(technologyId),
    };
  } catch (error) {
    return failure(error);
  }
};
