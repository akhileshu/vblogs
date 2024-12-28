"use server";

import { Response } from "@/server-actions/types/response";
import { BlogService } from "@/services/prisma/blog/blog-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { IdSchema } from "@/server-actions/utils/zod";



export const deleteBlogHandler = async (
  id: string
): Promise<
  Response<
    Awaited<ReturnType<BlogService["deleteBlog"]>>
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return {
        success: false,
        errorMsg: "Invalid ID format",
      };
    const blogService = new BlogService(prisma);
    return { success: true, data: await blogService.deleteBlog(validatedId) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
