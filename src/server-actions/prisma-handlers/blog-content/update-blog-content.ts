"use server";

import { Response } from "@/server-actions/types/response";
import { BlogContentService } from "@/services/prisma/blog-content/blog-content-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const UpdateBlogContentSchema = z.object({
id: z.string().uuid(),
});

export const updateBlogContentHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<BlogContentService["updateBlogContent"]>>,
    z.infer<typeof UpdateBlogContentSchema>
  >
> => {
  try {
    const { data: {id,...validatedData}, error } = UpdateBlogContentSchema.safeParse(formData);
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const blogContentService = new BlogContentService(prisma);
    return { success: true, data: await blogContentService.updateBlogContent(id,validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
