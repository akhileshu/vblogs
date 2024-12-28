"use server";

import { Response } from "@/server-actions/types/response";
import { VideoService } from "@/services/prisma/video/video-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { IdSchema } from "@/server-actions/utils/zod";



export const deleteVideoHandler = async (
  id: string
): Promise<
  Response<
    Awaited<ReturnType<VideoService["deleteVideo"]>>
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return {
        success: false,
        errorMsg: "Invalid ID format",
      };
    const videoService = new VideoService(prisma);
    return { success: true, data: await videoService.deleteVideo(validatedId) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
