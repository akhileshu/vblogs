"use server";

import { Response } from "@/server-actions/types/response";
import { BlogPlaylistItemServiceImplementation,BlogPlaylistItemServiceReturnType } from "@/services/prisma/blog-playlist-item/blog-playlist-item-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const CreateBlogPlaylistItemSchema = z.object({

});

export const createBlogPlaylistItemHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    BlogPlaylistItemServiceReturnType<"createBlogPlaylistItem">,
    z.infer<typeof CreateBlogPlaylistItemSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateBlogPlaylistItemSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error) return failureWithFieldErrors(error);
    const blogPlaylistItemService = new BlogPlaylistItemServiceImplementation(prisma);
    return { success: true, data: await blogPlaylistItemService.createBlogPlaylistItem(validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler