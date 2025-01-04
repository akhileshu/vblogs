"use server";
import { unstable_cache } from "next/cache";

import { Response } from "@/server-actions/types/response";
import { BlogService } from "@/services/prisma/blog/blog-service";
import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";

export const getBlogsByAuthorIdHandler = async (
  authorId: string
): Promise<
  Response<Awaited<ReturnType<BlogService["getBlogsByAuthorId"]>>>
> => {
  try {
    const blogService = new BlogService(prisma);
    return {
      success: true,
      data: await blogService.getBlogsByAuthorId(authorId),
    };
  } catch (error) {
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};



export const getCachedBlogsByAuthorIdHandler = async (authorId: string) => {
  const tag = `get-blogs-by-author-id-${authorId}`;
  return unstable_cache(
    () => getBlogsByAuthorIdHandler(authorId),
    [authorId], // Cache key dependency
    { tags: [tag] } // Tag for revalidation
  )();
};
