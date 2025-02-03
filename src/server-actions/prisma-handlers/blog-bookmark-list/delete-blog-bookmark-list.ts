"use server";

import { Response } from "@/server-actions/types/response";
import {
  BlogBookmarkListServiceImplementation,
  BlogBookmarkListServiceReturnType,
} from "@/services/prisma/blog-bookmark-list/blog-bookmark-list-service";
import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/shared/lib/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const DeleteBlogBookmarkListSchema = z.object({
  blogId: IdSchema,
});

export const deleteBlogBookmarkListHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<BlogBookmarkListServiceReturnType<"deleteBlogBookmarkList">>
> => {
  try {
    const { data: validatedData, error } =
      DeleteBlogBookmarkListSchema.safeParse(
        Object.fromEntries(formData.entries())
      );
    if (error) return failure("Invalid ID format");
    const blogBookmarkListService = new BlogBookmarkListServiceImplementation(
      prisma
    );
    return {
      success: true,
      data: await blogBookmarkListService.deleteBlogBookmarkList(
        validatedData.id
      ),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
