"use server";

import { Response } from "@/server-actions/types/response";
import { BlogServiceImplementation } from "@/services/prisma/blog/blog-service";
import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { IdSchema } from "@/shared/lib/zod";
import { z } from "zod";

const DeleteBlogSchema = z.object({
  blogId: IdSchema,
});

export const deleteBlogHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<Awaited<ReturnType<BlogServiceImplementation["deleteBlog"]>>>
> => {
  try {
    const { data: validatedData, error } = DeleteBlogSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error)
      return {
        success: false,
        errorMsg: "Invalid ID format",
      };
    const blogService = new BlogServiceImplementation(prisma);
    return {
      success: true,
      data: await blogService.deleteBlog(validatedData.blogId),
    };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
