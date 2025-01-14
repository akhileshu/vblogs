"use server";

import { Response } from "@/server-actions/types/response";
import { BlogPlaylistItemServiceImplementation ,BlogPlaylistItemServiceReturnType} from "@/services/prisma/blog-playlist-item/blog-playlist-item-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllBlogPlaylistItemsHandler = async (
): Promise<
  Response<
      BlogPlaylistItemServiceReturnType<"getAllBlogPlaylistItems">
  >
> => {
  try {

    const blogPlaylistItemService = new BlogPlaylistItemServiceImplementation(prisma);
    return { success: true, data: await blogPlaylistItemService.getAllBlogPlaylistItems() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler