"use server";

import { Response } from "@/server-actions/types/response";
import { TopicService } from "@/services/prisma/topic/topic-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const UpdateTopicSchema = z.object({
id: z.string().uuid(),
});

export const updateTopicHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<TopicService["updateTopic"]>>,
    z.infer<typeof UpdateTopicSchema>
  >
> => {
  try {
    const { data: {id,...validatedData}, error } = UpdateTopicSchema.safeParse(formData);
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const topicService = new TopicService(prisma);
    return { success: true, data: await topicService.updateTopic(id,validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
