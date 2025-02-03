"use server";

import { Response } from "@/server-actions/types/response";
import {
  VideoSectionServiceImplementation,
  VideoSectionServiceReturnType,
} from "@/services/prisma/video-section/video-section-service";
import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/shared/lib/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const DeleteVideoSectionSchema = z.object({
  blogId: IdSchema,
});

export const deleteVideoSectionHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<Response<VideoSectionServiceReturnType<"deleteVideoSection">>> => {
  try {
    const { data: validatedData, error } = DeleteVideoSectionSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) return failure("Invalid ID format");
    const videoSectionService = new VideoSectionServiceImplementation(prisma);
    return {
      success: true,
      data: await videoSectionService.deleteVideoSection(validatedData.id),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
