"use server";

import { Response } from "@/server-actions/types/response";
import { TopicServiceImplementation ,TopicServiceReturnType} from "@/services/prisma/topic/topic-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllTopicsHandler = async (
): Promise<
  Response<
      TopicServiceReturnType<"getAllTopics">
  >
> => {
  try {

    const topicService = new TopicServiceImplementation(prisma);
    return { success: true, data: await topicService.getAllTopics() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler