"use server";

import { Response } from "@/server-actions/types/response";
import { BlogBookmarkListServiceImplementation ,BlogBookmarkListServiceReturnType } from "@/services/prisma/blog-bookmark-list/blog-bookmark-list-service";import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/server-actions/utils/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

export const getBlogBookmarkListByIdHandler = async (
  id: string
): Promise<
  Response<
       BlogBookmarkListServiceReturnType<"getBlogBookmarkListById">
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return failure("Invalid ID format");
    const blogBookmarkListService = new BlogBookmarkListServiceImplementation(prisma);
    return { success: true, data: await blogBookmarkListService.getBlogBookmarkListById(validatedId) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler