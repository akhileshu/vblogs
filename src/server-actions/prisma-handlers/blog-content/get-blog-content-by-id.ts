"use server";

import { Response } from "@/server-actions/types/response";
import { BlogContentServiceImplementation ,BlogContentServiceReturnType } from "@/services/prisma/blog-content/blog-content-service";import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/server-actions/utils/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

export const getBlogContentByIdHandler = async (
  id: string
): Promise<
  Response<
       BlogContentServiceReturnType<"getBlogContentById">
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return failure("Invalid ID format");
    const blogContentService = new BlogContentServiceImplementation(prisma);
    return { success: true, data: await blogContentService.getBlogContentById(validatedId) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler