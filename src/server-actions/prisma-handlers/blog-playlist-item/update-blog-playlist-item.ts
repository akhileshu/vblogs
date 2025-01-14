"use server";

import { Response } from "@/server-actions/types/response";
import { BlogPlaylistItemServiceImplementation ,BlogPlaylistItemServiceReturnType } from "@/services/prisma/blog-playlist-item/blog-playlist-item-service";import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const UpdateBlogPlaylistItemSchema = z.object({
id: z.string().uuid(),
});

export const updateBlogPlaylistItemHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
       BlogPlaylistItemServiceReturnType<"updateBlogPlaylistItem">,
    z.infer<typeof UpdateBlogPlaylistItemSchema>
  >
> => {
  try {
    const { data: {id,...validatedData}, error } = UpdateBlogPlaylistItemSchema.safeParse(formData);
    if (error) return failureWithFieldErrors(error);
    const blogPlaylistItemService = new BlogPlaylistItemServiceImplementation(prisma);
    return { success: true, data: await blogPlaylistItemService.updateBlogPlaylistItem(id,validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler