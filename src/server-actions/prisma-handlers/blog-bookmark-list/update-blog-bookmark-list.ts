"use server";

import { Response } from "@/server-actions/types/response";
import {
  BlogBookmarkListServiceImplementation,
  BlogBookmarkListServiceReturnType,
} from "@/services/prisma/blog-bookmark-list/blog-bookmark-list-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const UpdateBlogBookmarkListSchema = z.object({
  id: z.string().uuid(),
});

export const updateBlogBookmarkListHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    BlogBookmarkListServiceReturnType<"updateBlogBookmarkList">,
    z.infer<typeof UpdateBlogBookmarkListSchema>
  >
> => {
  try {
    const {
      data: { id, ...validatedData },
      error,
    } = UpdateBlogBookmarkListSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) return failureWithFieldErrors(error);
    const blogBookmarkListService = new BlogBookmarkListServiceImplementation(
      prisma
    );
    return {
      success: true,
      data: await blogBookmarkListService.updateBlogBookmarkList(
        id,
        validatedData
      ),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
