"use server";

import { Response } from "@/server-actions/types/response";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { BlogService } from "@/services/prisma/blog/blog-service";
import { FieldsError } from "@/shared/lib/errors/customError";
import prisma from "@/shared/lib/prisma";
import { AddBlogMetadataSchema } from "@/shared/types/models/blog";
import { z } from "zod";



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
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};
