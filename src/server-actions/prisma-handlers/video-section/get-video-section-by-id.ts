"use server";

import { Response } from "@/server-actions/types/response";
import { VideoSectionServiceImplementation ,VideoSectionServiceReturnType } from "@/services/prisma/video-section/video-section-service";import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/server-actions/utils/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

export const getVideoSectionByIdHandler = async (
  id: string
): Promise<
  Response<
       VideoSectionServiceReturnType<"getVideoSectionById">
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return failure("Invalid ID format");
    const videoSectionService = new VideoSectionServiceImplementation(prisma);
    return { success: true, data: await videoSectionService.getVideoSectionById(validatedId) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler