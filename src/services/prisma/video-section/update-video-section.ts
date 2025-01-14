import { PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { UpdateVideoSectionSchemaType } from "@/shared/types/models/video-section";


export async function updateVideoSection(prisma: PrismaClient, id: string, data: Prisma.VideoSectionUpdateInput) {
  try{
    const fieldErrors: FieldErrors<UpdateVideoSectionSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
    return prisma.videoSection.update({ where: { id }, data });
  }catch(error){
    throw error
  }
}
