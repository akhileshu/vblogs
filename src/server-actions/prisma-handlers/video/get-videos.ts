"use server";

import { Response } from "@/server-actions/types/response";
import { VideoService } from "@/services/prisma/video/video-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";


export const getAllVideosHandler = async (
): Promise<
  Response<
    Awaited<ReturnType<VideoService["getAllVideos"]>>
  >
> => {
  try {

    const videoService = new VideoService(prisma);
    return { success: true, data: await videoService.getAllVideos() };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
