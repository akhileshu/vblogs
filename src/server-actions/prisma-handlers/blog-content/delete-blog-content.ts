"use server";

import { Response } from "@/server-actions/types/response";
import {
  BlogContentServiceImplementation,
  BlogContentServiceReturnType,
} from "@/services/prisma/blog-content/blog-content-service";
import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/shared/lib/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const DeleteBlogContentSchema = z.object({
  blogId: IdSchema,
});

export const deleteBlogContentHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<Response<BlogContentServiceReturnType<"deleteBlogContent">>> => {
  try {
    const { data: validatedData, error } = DeleteBlogContentSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) return failure("Invalid ID format");
    const blogContentService = new BlogContentServiceImplementation(prisma);
    return {
      success: true,
      data: await blogContentService.deleteBlogContent(validatedData.id),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
