"use server";
import { unstable_cache } from "next/cache";

import { Response } from "@/server-actions/types/response";
import { BlogServiceImplementation, BlogServiceReturnType } from "@/services/prisma/blog/blog-service";
import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { BlogSearchQueryParameters } from "@/shared/types/models/blog";

export const getBlogsByAuthorIdHandler = async (
  authorId: string,
  filters: BlogSearchQueryParameters
): Promise<Response<BlogServiceReturnType<"getBlogsByAuthorId">>> => {
  try {
    const blogService = new BlogServiceImplementation(prisma);
    return {
      success: true,
      data: await blogService.getBlogsByAuthorId(authorId, filters),
    };
  } catch (error) {
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};

export const getCachedBlogsByAuthorIdHandler = async (
  authorId: string,
  filters: BlogSearchQueryParameters
) => {
  const tag = `get-blogs-by-author-id-${authorId}`;
  return unstable_cache(
    () => getBlogsByAuthorIdHandler(authorId, filters),
    [authorId], // Cache key dependency
    { tags: [tag] } // Tag for revalidation
  )();
};
