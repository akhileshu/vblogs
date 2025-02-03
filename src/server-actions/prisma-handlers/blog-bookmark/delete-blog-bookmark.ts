"use server";

import { Response } from "@/server-actions/types/response";
import {
  BlogBookmarkServiceImplementation,
  BlogBookmarkServiceReturnType,
} from "@/services/prisma/blog-bookmark/blog-bookmark-service";
import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/shared/lib/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const DeleteBlogBookmarkSchema = z.object({
  blogId: IdSchema,
});

export const deleteBlogBookmarkHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<Response<BlogBookmarkServiceReturnType<"deleteBlogBookmark">>> => {
  try {
    const { data: validatedData, error } = DeleteBlogBookmarkSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) return failure("Invalid ID format");
    const blogBookmarkService = new BlogBookmarkServiceImplementation(prisma);
    return {
      success: true,
      data: await blogBookmarkService.deleteBlogBookmark(validatedData.id),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
