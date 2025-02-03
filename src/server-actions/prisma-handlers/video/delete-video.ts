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

const DeleteVideoSchema = z.object({
  blogId: IdSchema,
});

export const deleteVideoHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<Response<VideoServiceReturnType<"deleteVideo">>> => {
  try {
    const { data: validatedData, error } = DeleteVideoSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) return failure("Invalid ID format");
    const videoService = new VideoServiceImplementation(prisma);
    return {
      success: true,
      data: await videoService.deleteVideo(validatedData.id),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
