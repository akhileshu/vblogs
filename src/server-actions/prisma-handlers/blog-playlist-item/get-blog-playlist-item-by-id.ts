"use server";

import { Response } from "@/server-actions/types/response";
import { BlogPlaylistItemServiceImplementation ,BlogPlaylistItemServiceReturnType } from "@/services/prisma/blog-playlist-item/blog-playlist-item-service";import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/server-actions/utils/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

export const getBlogPlaylistItemByIdHandler = async (
  id: string
): Promise<
  Response<
       BlogPlaylistItemServiceReturnType<"getBlogPlaylistItemById">
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return failure("Invalid ID format");
    const blogPlaylistItemService = new BlogPlaylistItemServiceImplementation(prisma);
    return { success: true, data: await blogPlaylistItemService.getBlogPlaylistItemById(validatedId) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler