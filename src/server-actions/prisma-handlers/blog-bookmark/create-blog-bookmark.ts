"use server";

import { Response } from "@/server-actions/types/response";
import { BlogBookmarkServiceImplementation,BlogBookmarkServiceReturnType } from "@/services/prisma/blog-bookmark/blog-bookmark-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const CreateBlogBookmarkSchema = z.object({

});

export const createBlogBookmarkHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    BlogBookmarkServiceReturnType<"createBlogBookmark">,
    z.infer<typeof CreateBlogBookmarkSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateBlogBookmarkSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error) return failureWithFieldErrors(error);
    const blogBookmarkService = new BlogBookmarkServiceImplementation(prisma);
    return { success: true, data: await blogBookmarkService.createBlogBookmark(validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler