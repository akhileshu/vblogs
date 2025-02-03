"use server";

import { Response } from "@/server-actions/types/response";
import {
  VideoServiceImplementation,
  VideoServiceReturnType,
} from "@/services/prisma/video/video-service";
import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/shared/lib/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

export const getVideoByIdHandler = async (
  id: string
): Promise<Response<VideoServiceReturnType<"getVideoById">>> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error) return failure("Invalid ID format");
    const videoService = new VideoServiceImplementation(prisma);
    return {
      success: true,
      data: await videoService.getVideoById(validatedId),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
