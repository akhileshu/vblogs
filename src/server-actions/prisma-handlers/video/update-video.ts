"use server";

import { Response } from "@/server-actions/types/response";
import {
  VideoServiceImplementation,
  VideoServiceReturnType,
} from "@/services/prisma/video/video-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const UpdateVideoSchema = z.object({
  id: z.string().uuid(),
});

export const updateVideoHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    VideoServiceReturnType<"updateVideo">,
    z.infer<typeof UpdateVideoSchema>
  >
> => {
  try {
    const {
      data: { id, ...validatedData },
      error,
    } = UpdateVideoSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error) return failureWithFieldErrors(error);
    const videoService = new VideoServiceImplementation(prisma);
    return {
      success: true,
      data: await videoService.updateVideo(id, validatedData),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
