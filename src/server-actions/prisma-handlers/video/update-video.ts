"use server";

import { Response } from "@/server-actions/types/response";
import { VideoService } from "@/services/prisma/video/video-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const UpdateVideoSchema = z.object({
id: z.string().uuid(),
});

export const updateVideoHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<VideoService["updateVideo"]>>,
    z.infer<typeof UpdateVideoSchema>
  >
> => {
  try {
    const { data: {id,...validatedData}, error } = UpdateVideoSchema.safeParse(formData);
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const videoService = new VideoService(prisma);
    return { success: true, data: await videoService.updateVideo(id,validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
