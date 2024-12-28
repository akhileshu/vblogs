"use server";

import { Response } from "@/server-actions/types/response";
import { BlogService } from "@/services/prisma/blog/blog-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const UpdateBlogSchema = z.object({
id: z.string().uuid(),
});

export const updateBlogHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<BlogService["updateBlog"]>>,
    z.infer<typeof UpdateBlogSchema>
  >
> => {
  try {
    const { data: {id,...validatedData}, error } = UpdateBlogSchema.safeParse(formData);
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const blogService = new BlogService(prisma);
    return { success: true, data: await blogService.updateBlog(id,validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
