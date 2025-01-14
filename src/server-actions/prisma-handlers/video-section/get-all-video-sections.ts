"use server";

import { Response } from "@/server-actions/types/response";
import { VideoSectionServiceImplementation ,VideoSectionServiceReturnType} from "@/services/prisma/video-section/video-section-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllVideoSectionsHandler = async (
): Promise<
  Response<
      VideoSectionServiceReturnType<"getAllVideoSections">
  >
> => {
  try {

    const videoSectionService = new VideoSectionServiceImplementation(prisma);
    return { success: true, data: await videoSectionService.getAllVideoSections() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler