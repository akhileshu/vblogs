"use server";

import { Response } from "@/server-actions/types/response";
import { TagsOnBlogsService } from "@/services/prisma/tags-on-blogs/tags-on-blogs-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { IdSchema } from "@/server-actions/utils/zod";



export const deleteTagsOnBlogsHandler = async (
  id: string
): Promise<
  Response<
    Awaited<ReturnType<TagsOnBlogsService["deleteTagsOnBlogs"]>>
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return {
        success: false,
        errorMsg: "Invalid ID format",
      };
    const tagsOnBlogsService = new TagsOnBlogsService(prisma);
    return { success: true, data: await tagsOnBlogsService.deleteTagsOnBlogs(validatedId) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
