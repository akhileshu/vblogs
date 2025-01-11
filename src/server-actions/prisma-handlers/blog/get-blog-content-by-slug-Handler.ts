"use server";

import { Response } from "@/server-actions/types/response";
import { BlogServiceImplementation } from "@/services/prisma/blog/blog-service";
import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";

export const getBlogContentBySlugHandler = async (
  slug: string
): Promise<
  Response<
    Awaited<ReturnType<BlogServiceImplementation["getBlogContentBySlug"]>>
  >
> => {
  try {
    const blogService = new BlogServiceImplementation(prisma);
    return {
      success: true,
      data: await blogService.getBlogContentBySlug(slug),
    };
  } catch (error) {
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
