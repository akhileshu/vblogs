import type{ PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { CreateVideoSchemaType } from "@/shared/types/models/video";

export async function createVideo(prisma: PrismaClient, data: Prisma.VideoCreateInput) {
  try{
    const fieldErrors: FieldErrors<CreateVideoSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
  return prisma.video.create({ data });
  } catch (error) {
    throw error
  }
}
