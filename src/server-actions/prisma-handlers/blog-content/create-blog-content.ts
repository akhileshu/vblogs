"use server";

import { Response } from "@/server-actions/types/response";
import { BlogContentServiceImplementation,BlogContentServiceReturnType } from "@/services/prisma/blog-content/blog-content-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const CreateBlogContentSchema = z.object({

});

export const createBlogContentHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    BlogContentServiceReturnType<"createBlogContent">,
    z.infer<typeof CreateBlogContentSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateBlogContentSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error) return failureWithFieldErrors(error);
    const blogContentService = new BlogContentServiceImplementation(prisma);
    return { success: true, data: await blogContentService.createBlogContent(validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler