"use server";

import { Response } from "@/server-actions/types/response";
import { VideoService } from "@/services/prisma/video/video-service";
import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";

export const previewVideoHandler = async (

): Promise<
  Response<
    Awaited<ReturnType<VideoService["previewVideo"]>>
  >
> => {
  try {
    const videoService = new VideoService(prisma);
    return { success: true, data: await videoService.previewVideo(undefined) };
  } catch (error) {
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};

