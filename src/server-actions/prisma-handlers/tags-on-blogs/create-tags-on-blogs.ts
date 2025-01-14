"use server";

import { Response } from "@/server-actions/types/response";
import { TagsOnBlogsServiceImplementation,TagsOnBlogsServiceReturnType } from "@/services/prisma/tags-on-blogs/tags-on-blogs-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const CreateTagsOnBlogsSchema = z.object({

});

export const createTagsOnBlogsHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    TagsOnBlogsServiceReturnType<"createTagsOnBlogs">,
    z.infer<typeof CreateTagsOnBlogsSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateTagsOnBlogsSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error) return failureWithFieldErrors(error);
    const tagsOnBlogsService = new TagsOnBlogsServiceImplementation(prisma);
    return { success: true, data: await tagsOnBlogsService.createTagsOnBlogs(validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler