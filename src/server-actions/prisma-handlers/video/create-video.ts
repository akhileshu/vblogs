"use server";

import { Response } from "@/server-actions/types/response";
import { VideoServiceImplementation,VideoServiceReturnType } from "@/services/prisma/video/video-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const CreateVideoSchema = z.object({

});

export const createVideoHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    VideoServiceReturnType<"createVideo">,
    z.infer<typeof CreateVideoSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateVideoSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error) return failureWithFieldErrors(error);
    const videoService = new VideoServiceImplementation(prisma);
    return { success: true, data: await videoService.createVideo(validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler