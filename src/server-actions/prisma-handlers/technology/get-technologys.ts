"use server";

import { Response } from "@/server-actions/types/response";
import { TechnologyService } from "@/services/prisma/technology/technology-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";


export const getAllTechnologysHandler = async (
): Promise<
  Response<
    Awaited<ReturnType<TechnologyService["getAllTechnologys"]>>
  >
> => {
  try {

    const technologyService = new TechnologyService(prisma);
    return { success: true, data: await technologyService.getAllTechnologys() };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
