"use server";

import { Response } from "@/server-actions/types/response";
import {
  TagsOnBlogsServiceImplementation,
  TagsOnBlogsServiceReturnType,
} from "@/services/prisma/tags-on-blogs/tags-on-blogs-service";
import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/shared/lib/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

export const getTagsOnBlogsByIdHandler = async (
  id: string
): Promise<Response<TagsOnBlogsServiceReturnType<"getTagsOnBlogsById">>> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error) return failure("Invalid ID format");
    const tagsOnBlogsService = new TagsOnBlogsServiceImplementation(prisma);
    return {
      success: true,
      data: await tagsOnBlogsService.getTagsOnBlogsById(validatedId),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
