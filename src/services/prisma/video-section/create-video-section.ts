import type{ PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { CreateVideoSectionSchemaType } from "@/shared/types/models/video-section";

export async function createVideoSection(prisma: PrismaClient, data: Prisma.VideoSectionCreateInput) {
  try{
    const fieldErrors: FieldErrors<CreateVideoSectionSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
  return prisma.videoSection.create({ data });
  } catch (error) {
    throw error
  }
}
