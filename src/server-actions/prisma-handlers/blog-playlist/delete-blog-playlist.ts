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

const DeleteBlogPlaylistSchema = z.object({
  blogId: IdSchema,
});

export const deleteBlogPlaylistHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<Response<BlogPlaylistServiceReturnType<"deleteBlogPlaylist">>> => {
  try {
    const { data: validatedData, error } = DeleteBlogPlaylistSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) return failure("Invalid ID format");
    const blogPlaylistService = new BlogPlaylistServiceImplementation(prisma);
    return {
      success: true,
      data: await blogPlaylistService.deleteBlogPlaylist(validatedData.id),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
