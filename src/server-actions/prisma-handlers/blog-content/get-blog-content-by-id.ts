"use server";

import { Response } from "@/server-actions/types/response";
import { BlogContentService } from "@/services/prisma/blog-content/blog-content-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { IdSchema } from "@/server-actions/utils/zod";

export const getBlogContentByIdHandler = async (
  id: string
): Promise<
  Response<
    Awaited<ReturnType<BlogContentService["getBlogContentById"]>>
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return {
        success: false,
        errorMsg: "Invalid ID format",
      };
    const blogContentService = new BlogContentService(prisma);
    return { success: true, data: await blogContentService.getBlogContentById(validatedId) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
