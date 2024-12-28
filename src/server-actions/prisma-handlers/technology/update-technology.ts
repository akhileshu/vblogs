"use server";

import { Response } from "@/server-actions/types/response";
import { TechnologyService } from "@/services/prisma/technology/technology-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const UpdateTechnologySchema = z.object({
id: z.string().uuid(),
});

export const updateTechnologyHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<TechnologyService["updateTechnology"]>>,
    z.infer<typeof UpdateTechnologySchema>
  >
> => {
  try {
    const { data: {id,...validatedData}, error } = UpdateTechnologySchema.safeParse(formData);
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const technologyService = new TechnologyService(prisma);
    return { success: true, data: await technologyService.updateTechnology(id,validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
