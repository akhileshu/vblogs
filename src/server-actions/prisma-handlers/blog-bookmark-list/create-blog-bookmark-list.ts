"use server";

import { Response } from "@/server-actions/types/response";
import { BlogBookmarkListServiceImplementation,BlogBookmarkListServiceReturnType } from "@/services/prisma/blog-bookmark-list/blog-bookmark-list-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const CreateBlogBookmarkListSchema = z.object({

});

export const createBlogBookmarkListHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    BlogBookmarkListServiceReturnType<"createBlogBookmarkList">,
    z.infer<typeof CreateBlogBookmarkListSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateBlogBookmarkListSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error) return failureWithFieldErrors(error);
    const blogBookmarkListService = new BlogBookmarkListServiceImplementation(prisma);
    return { success: true, data: await blogBookmarkListService.createBlogBookmarkList(validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler