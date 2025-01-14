"use server";

import { Response } from "@/server-actions/types/response";
import { TagsOnBlogsServiceImplementation ,TagsOnBlogsServiceReturnType } from "@/services/prisma/tags-on-blogs/tags-on-blogs-service";import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const UpdateTagsOnBlogsSchema = z.object({
id: z.string().uuid(),
});

export const updateTagsOnBlogsHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
       TagsOnBlogsServiceReturnType<"updateTagsOnBlogs">,
    z.infer<typeof UpdateTagsOnBlogsSchema>
  >
> => {
  try {
    const { data: {id,...validatedData}, error } = UpdateTagsOnBlogsSchema.safeParse(formData);
    if (error) return failureWithFieldErrors(error);
    const tagsOnBlogsService = new TagsOnBlogsServiceImplementation(prisma);
    return { success: true, data: await tagsOnBlogsService.updateTagsOnBlogs(id,validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler