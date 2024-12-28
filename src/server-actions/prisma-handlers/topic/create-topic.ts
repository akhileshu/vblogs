"use server";

import { Response } from "@/server-actions/types/response";
import { TopicService } from "@/services/prisma/topic/topic-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const CreateTopicSchema = z.object({

});

export const createTopicHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<TopicService["createTopic"]>>,
    z.infer<typeof CreateTopicSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateTopicSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const topicService = new TopicService(prisma);
    return { success: true, data: await topicService.createTopic(validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
