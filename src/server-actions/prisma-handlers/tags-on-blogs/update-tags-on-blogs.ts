"use server";

import { Response } from "@/server-actions/types/response";
import { TagsOnBlogsService } from "@/services/prisma/tags-on-blogs/tags-on-blogs-service";import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const UpdateTagsOnBlogsSchema = z.object({
id: z.string().uuid(),
});

export const updateTagsOnBlogsHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<TagsOnBlogsService["updateTagsOnBlogs"]>>,
    z.infer<typeof UpdateTagsOnBlogsSchema>
  >
> => {
  try {
    const { data: {id,...validatedData}, error } = UpdateTagsOnBlogsSchema.safeParse(formData);
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const tagsOnBlogsService = new TagsOnBlogsService(prisma);
    return { success: true, data: await tagsOnBlogsService.updateTagsOnBlogs(id,validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
