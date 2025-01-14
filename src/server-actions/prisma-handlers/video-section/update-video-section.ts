"use server";

import { Response } from "@/server-actions/types/response";
import { VideoSectionServiceImplementation ,VideoSectionServiceReturnType } from "@/services/prisma/video-section/video-section-service";import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const UpdateVideoSectionSchema = z.object({
id: z.string().uuid(),
});

export const updateVideoSectionHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
       VideoSectionServiceReturnType<"updateVideoSection">,
    z.infer<typeof UpdateVideoSectionSchema>
  >
> => {
  try {
    const { data: {id,...validatedData}, error } = UpdateVideoSectionSchema.safeParse(formData);
    if (error) return failureWithFieldErrors(error);
    const videoSectionService = new VideoSectionServiceImplementation(prisma);
    return { success: true, data: await videoSectionService.updateVideoSection(id,validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler