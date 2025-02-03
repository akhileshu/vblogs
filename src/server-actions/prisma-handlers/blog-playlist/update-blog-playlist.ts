"use server";

import { Response } from "@/server-actions/types/response";
import {
  BlogPlaylistServiceImplementation,
  BlogPlaylistServiceReturnType,
} from "@/services/prisma/blog-playlist/blog-playlist-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const UpdateBlogPlaylistSchema = z.object({
  id: z.string().uuid(),
});

export const updateBlogPlaylistHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    BlogPlaylistServiceReturnType<"updateBlogPlaylist">,
    z.infer<typeof UpdateBlogPlaylistSchema>
  >
> => {
  try {
    const {
      data: { id, ...validatedData },
      error,
    } = UpdateBlogPlaylistSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) return failureWithFieldErrors(error);
    const blogPlaylistService = new BlogPlaylistServiceImplementation(prisma);
    return {
      success: true,
      data: await blogPlaylistService.updateBlogPlaylist(id, validatedData),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
