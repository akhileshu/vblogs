"use server";

import { Response } from "@/server-actions/types/response";
import {
  BlogBookmarkServiceImplementation,
  BlogBookmarkServiceReturnType,
} from "@/services/prisma/blog-bookmark/blog-bookmark-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const UpdateBlogBookmarkSchema = z.object({
  id: z.string().uuid(),
});

export const updateBlogBookmarkHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    BlogBookmarkServiceReturnType<"updateBlogBookmark">,
    z.infer<typeof UpdateBlogBookmarkSchema>
  >
> => {
  try {
    const {
      data: { id, ...validatedData },
      error,
    } = UpdateBlogBookmarkSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) return failureWithFieldErrors(error);
    const blogBookmarkService = new BlogBookmarkServiceImplementation(prisma);
    return {
      success: true,
      data: await blogBookmarkService.updateBlogBookmark(id, validatedData),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
