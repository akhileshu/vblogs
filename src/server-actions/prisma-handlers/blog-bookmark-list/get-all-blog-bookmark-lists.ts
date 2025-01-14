"use server";

import { Response } from "@/server-actions/types/response";
import { BlogBookmarkListServiceImplementation ,BlogBookmarkListServiceReturnType} from "@/services/prisma/blog-bookmark-list/blog-bookmark-list-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllBlogBookmarkListsHandler = async (
): Promise<
  Response<
      BlogBookmarkListServiceReturnType<"getAllBlogBookmarkLists">
  >
> => {
  try {

    const blogBookmarkListService = new BlogBookmarkListServiceImplementation(prisma);
    return { success: true, data: await blogBookmarkListService.getAllBlogBookmarkLists() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler