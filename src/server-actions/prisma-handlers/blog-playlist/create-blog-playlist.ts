"use server";

import { Response } from "@/server-actions/types/response";
import { BlogPlaylistServiceImplementation,BlogPlaylistServiceReturnType } from "@/services/prisma/blog-playlist/blog-playlist-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const CreateBlogPlaylistSchema = z.object({

});

export const createBlogPlaylistHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    BlogPlaylistServiceReturnType<"createBlogPlaylist">,
    z.infer<typeof CreateBlogPlaylistSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateBlogPlaylistSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error) return failureWithFieldErrors(error);
    const blogPlaylistService = new BlogPlaylistServiceImplementation(prisma);
    return { success: true, data: await blogPlaylistService.createBlogPlaylist(validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler