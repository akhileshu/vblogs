"use server";

import { Response } from "@/server-actions/types/response";
import { BlogBookmarkServiceImplementation ,BlogBookmarkServiceReturnType} from "@/services/prisma/blog-bookmark/blog-bookmark-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllBlogBookmarksHandler = async (
): Promise<
  Response<
      BlogBookmarkServiceReturnType<"getAllBlogBookmarks">
  >
> => {
  try {

    const blogBookmarkService = new BlogBookmarkServiceImplementation(prisma);
    return { success: true, data: await blogBookmarkService.getAllBlogBookmarks() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler