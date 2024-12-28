"use server";

import { Response } from "@/server-actions/types/response";
import { VideoService } from "@/services/prisma/video/video-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const CreateVideoSchema = z.object({

});

export const createVideoHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<VideoService["createVideo"]>>,
    z.infer<typeof CreateVideoSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateVideoSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const videoService = new VideoService(prisma);
    return { success: true, data: await videoService.createVideo(validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
