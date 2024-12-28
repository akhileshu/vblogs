"use server";

import { Response } from "@/server-actions/types/response";
import { BlogContentService } from "@/services/prisma/blog-content/blog-content-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const CreateBlogContentSchema = z.object({

});

export const createBlogContentHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<BlogContentService["createBlogContent"]>>,
    z.infer<typeof CreateBlogContentSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateBlogContentSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const blogContentService = new BlogContentService(prisma);
    return { success: true, data: await blogContentService.createBlogContent(validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
