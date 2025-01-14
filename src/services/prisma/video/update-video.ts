import { PrismaClient, Prisma } from "@prisma/client";
import { FieldErrors } from "@/server-actions/types/response";
import { FieldsError } from "@/shared/lib/errors/customError";
import { UpdateVideoSchemaType } from "@/shared/types/models/video";


export async function updateVideo(prisma: PrismaClient, id: string, data: Prisma.VideoUpdateInput) {
  try{
    const fieldErrors: FieldErrors<UpdateVideoSchemaType> = {};
    if (Object.keys(fieldErrors).length > 0) {
      throw new FieldsError(fieldErrors);
    }
    return prisma.video.update({ where: { id }, data });
  }catch(error){
    throw error
  }
}
