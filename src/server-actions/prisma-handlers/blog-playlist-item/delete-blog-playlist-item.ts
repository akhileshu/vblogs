"use server";

import { Response } from "@/server-actions/types/response";
import { BlogPlaylistItemServiceImplementation,BlogPlaylistItemServiceReturnType } from "@/services/prisma/blog-playlist-item/blog-playlist-item-service";import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/server-actions/utils/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const DeleteBlogPlaylistItemSchema = z.object({
  blogId: IdSchema
});

export const deleteBlogPlaylistItemHandler = async (
   prevState: unknown,
  formData: FormData
): Promise<
  Response<
      BlogPlaylistItemServiceReturnType<"deleteBlogPlaylistItem">
  >
> => {
  try {
    const { data: validatedData, error } = DeleteBlogPlaylistItemSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error)
      return failure("Invalid ID format");
    const blogPlaylistItemService = new BlogPlaylistItemServiceImplementation(prisma);
    return { success: true, data: await blogPlaylistItemService.deleteBlogPlaylistItem(validatedData.id) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler