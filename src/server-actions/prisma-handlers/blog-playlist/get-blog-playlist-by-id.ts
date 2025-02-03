"use server";

import { Response } from "@/server-actions/types/response";
import {
  BlogPlaylistServiceImplementation,
  BlogPlaylistServiceReturnType,
} from "@/services/prisma/blog-playlist/blog-playlist-service";
import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/shared/lib/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

export const getBlogPlaylistByIdHandler = async (
  id: string
): Promise<Response<BlogPlaylistServiceReturnType<"getBlogPlaylistById">>> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error) return failure("Invalid ID format");
    const blogPlaylistService = new BlogPlaylistServiceImplementation(prisma);
    return {
      success: true,
      data: await blogPlaylistService.getBlogPlaylistById(validatedId),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
