"use server";

import { Response } from "@/server-actions/types/response";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { BlogService } from "@/services/prisma/blog/blog-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";

const AddBlogMetadataSchema = z.object({
  title: z.string().min(1, "Title is required"),
  topicId: z.string().uuid("Invalid Topic ID"),
  tagIds: z.string().transform((tagsString) => {
    const parsedTags = JSON.parse(tagsString);
    return z.array(z.string().uuid("Invalid Tag ID")).parse(parsedTags); //After parsing the JSON string, the parsedTags is validated against an array of tagSchema objects.
  }),
});

export const addBlogMetadataHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<BlogService["addBlogMetadata"]>>,
    z.infer<typeof AddBlogMetadataSchema>
  >
> => {
  try {
    const { data: validatedData, error } = AddBlogMetadataSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) return failureWithFieldErrors(error);
    const blogService = new BlogService(prisma);
    return {
      success: true,
      data: await blogService.addBlogMetadata(validatedData),
    };
  } catch (error) {
    return failure(error);
  }
};
