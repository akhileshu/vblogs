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

export const getBlogBookmarkByIdHandler = async (
  id: string
): Promise<Response<BlogBookmarkServiceReturnType<"getBlogBookmarkById">>> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error) return failure("Invalid ID format");
    const blogBookmarkService = new BlogBookmarkServiceImplementation(prisma);
    return {
      success: true,
      data: await blogBookmarkService.getBlogBookmarkById(validatedId),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
