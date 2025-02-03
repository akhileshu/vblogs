"use server";

import { Response } from "@/server-actions/types/response";
import { TechnologyService } from "@/services/prisma/technology/technology-service";
import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { IdSchema } from "@/shared/lib/zod";

export const getTechnologyByIdHandler = async (
  id: string
): Promise<
  Response<Awaited<ReturnType<TechnologyService["getTechnologyById"]>>>
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return {
        success: false,
        errorMsg: "Invalid ID format",
      };
    const technologyService = new TechnologyService(prisma);
    return {
      success: true,
      data: await technologyService.getTechnologyById(validatedId),
    };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
