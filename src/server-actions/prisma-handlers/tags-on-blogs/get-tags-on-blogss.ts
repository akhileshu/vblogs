"use server";

import { Response } from "@/server-actions/types/response";
import { TagsOnBlogsService } from "@/services/prisma/tags-on-blogs/tags-on-blogs-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";


export const getAllTagsOnBlogssHandler = async (
): Promise<
  Response<
    Awaited<ReturnType<TagsOnBlogsService["getAllTagsOnBlogss"]>>
  >
> => {
  try {

    const tagsOnBlogsService = new TagsOnBlogsService(prisma);
    return { success: true, data: await tagsOnBlogsService.getAllTagsOnBlogss() };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
