"use server";

import { Response } from "@/server-actions/types/response";
import { VideoSectionService } from "@/services/prisma/video-section/video-section-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { IdSchema } from "@/server-actions/utils/zod";



export const deleteVideoSectionHandler = async (
  id: string
): Promise<
  Response<
    Awaited<ReturnType<VideoSectionService["deleteVideoSection"]>>
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return {
        success: false,
        errorMsg: "Invalid ID format",
      };
    const videoSectionService = new VideoSectionService(prisma);
    return { success: true, data: await videoSectionService.deleteVideoSection(validatedId) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
