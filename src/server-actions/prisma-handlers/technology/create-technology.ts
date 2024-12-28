"use server";

import { Response } from "@/server-actions/types/response";
import { TechnologyService } from "@/services/prisma/technology/technology-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const CreateTechnologySchema = z.object({

});

export const createTechnologyHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<TechnologyService["createTechnology"]>>,
    z.infer<typeof CreateTechnologySchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateTechnologySchema.safeParse(Object.fromEntries(formData.entries()));
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const technologyService = new TechnologyService(prisma);
    return { success: true, data: await technologyService.createTechnology(validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
