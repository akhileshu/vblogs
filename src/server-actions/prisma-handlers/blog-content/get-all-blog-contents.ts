"use server";

import { Response } from "@/server-actions/types/response";
import { BlogContentServiceImplementation ,BlogContentServiceReturnType} from "@/services/prisma/blog-content/blog-content-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllBlogContentsHandler = async (
): Promise<
  Response<
      BlogContentServiceReturnType<"getAllBlogContents">
  >
> => {
  try {

    const blogContentService = new BlogContentServiceImplementation(prisma);
    return { success: true, data: await blogContentService.getAllBlogContents() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler