"use server";

import { Response } from "@/server-actions/types/response";
import { BlogServiceImplementation } from "@/services/prisma/blog/blog-service";
import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";

export const getAllBlogsHandler = async (): Promise<
  Response<Awaited<ReturnType<BlogServiceImplementation["getAllBlogs"]>>>
> => {
  try {
    const blogService = new BlogServiceImplementation(prisma);
    return { success: true, data: await blogService.getAllBlogs() };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
