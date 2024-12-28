"use server";

import { Response } from "@/server-actions/types/response";
import { VideoSectionService } from "@/services/prisma/video-section/video-section-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";


export const getAllVideoSectionsHandler = async (
): Promise<
  Response<
    Awaited<ReturnType<VideoSectionService["getAllVideoSections"]>>
  >
> => {
  try {

    const videoSectionService = new VideoSectionService(prisma);
    return { success: true, data: await videoSectionService.getAllVideoSections() };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
