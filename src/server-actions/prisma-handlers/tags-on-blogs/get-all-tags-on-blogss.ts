"use server";

import { Response } from "@/server-actions/types/response";
import { TagsOnBlogsServiceImplementation ,TagsOnBlogsServiceReturnType} from "@/services/prisma/tags-on-blogs/tags-on-blogs-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllTagsOnBlogssHandler = async (
): Promise<
  Response<
      TagsOnBlogsServiceReturnType<"getAllTagsOnBlogss">
  >
> => {
  try {

    const tagsOnBlogsService = new TagsOnBlogsServiceImplementation(prisma);
    return { success: true, data: await tagsOnBlogsService.getAllTagsOnBlogss() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler