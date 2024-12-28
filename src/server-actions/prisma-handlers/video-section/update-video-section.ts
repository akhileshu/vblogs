"use server";

import { Response } from "@/server-actions/types/response";
import { VideoSectionService } from "@/services/prisma/video-section/video-section-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const UpdateVideoSectionSchema = z.object({
id: z.string().uuid(),
});

export const updateVideoSectionHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<VideoSectionService["updateVideoSection"]>>,
    z.infer<typeof UpdateVideoSectionSchema>
  >
> => {
  try {
    const { data: {id,...validatedData}, error } = UpdateVideoSectionSchema.safeParse(formData);
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const videoSectionService = new VideoSectionService(prisma);
    return { success: true, data: await videoSectionService.updateVideoSection(id,validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
