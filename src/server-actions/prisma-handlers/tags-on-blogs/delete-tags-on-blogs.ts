"use server";

import { Response } from "@/server-actions/types/response";
import { TagsOnBlogsServiceImplementation,TagsOnBlogsServiceReturnType } from "@/services/prisma/tags-on-blogs/tags-on-blogs-service";import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/server-actions/utils/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const DeleteTagsOnBlogsSchema = z.object({
  blogId: IdSchema
});

export const deleteTagsOnBlogsHandler = async (
   prevState: unknown,
  formData: FormData
): Promise<
  Response<
      TagsOnBlogsServiceReturnType<"deleteTagsOnBlogs">
  >
> => {
  try {
    const { data: validatedData, error } = DeleteTagsOnBlogsSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error)
      return failure("Invalid ID format");
    const tagsOnBlogsService = new TagsOnBlogsServiceImplementation(prisma);
    return { success: true, data: await tagsOnBlogsService.deleteTagsOnBlogs(validatedData.id) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler