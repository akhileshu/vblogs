"use server";

import { Response } from "@/server-actions/types/response";
import { BlogContentService } from "@/services/prisma/blog-content/blog-content-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";


export const getAllBlogContentsHandler = async (
): Promise<
  Response<
    Awaited<ReturnType<BlogContentService["getAllBlogContents"]>>
  >
> => {
  try {

    const blogContentService = new BlogContentService(prisma);
    return { success: true, data: await blogContentService.getAllBlogContents() };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
