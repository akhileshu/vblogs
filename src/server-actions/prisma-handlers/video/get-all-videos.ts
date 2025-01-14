"use server";

import { Response } from "@/server-actions/types/response";
import { VideoServiceImplementation ,VideoServiceReturnType} from "@/services/prisma/video/video-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllVideosHandler = async (
): Promise<
  Response<
      VideoServiceReturnType<"getAllVideos">
  >
> => {
  try {

    const videoService = new VideoServiceImplementation(prisma);
    return { success: true, data: await videoService.getAllVideos() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler