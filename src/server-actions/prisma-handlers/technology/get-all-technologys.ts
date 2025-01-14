"use server";

import { Response } from "@/server-actions/types/response";
import { TechnologyServiceImplementation ,TechnologyServiceReturnType} from "@/services/prisma/technology/technology-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllTechnologysHandler = async (
): Promise<
  Response<
      TechnologyServiceReturnType<"getAllTechnologys">
  >
> => {
  try {

    const technologyService = new TechnologyServiceImplementation(prisma);
    return { success: true, data: await technologyService.getAllTechnologys() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler