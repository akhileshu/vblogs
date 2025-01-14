"use server";

import { Response } from "@/server-actions/types/response";
import { VideoSectionServiceImplementation,VideoSectionServiceReturnType } from "@/services/prisma/video-section/video-section-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const CreateVideoSectionSchema = z.object({

});

export const createVideoSectionHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    VideoSectionServiceReturnType<"createVideoSection">,
    z.infer<typeof CreateVideoSectionSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateVideoSectionSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error) return failureWithFieldErrors(error);
    const videoSectionService = new VideoSectionServiceImplementation(prisma);
    return { success: true, data: await videoSectionService.createVideoSection(validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler