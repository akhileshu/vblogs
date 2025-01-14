"use server";

import { Response } from "@/server-actions/types/response";
import { BlogPlaylistServiceImplementation ,BlogPlaylistServiceReturnType} from "@/services/prisma/blog-playlist/blog-playlist-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllBlogPlaylistsHandler = async (
): Promise<
  Response<
      BlogPlaylistServiceReturnType<"getAllBlogPlaylists">
  >
> => {
  try {

    const blogPlaylistService = new BlogPlaylistServiceImplementation(prisma);
    return { success: true, data: await blogPlaylistService.getAllBlogPlaylists() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler