"use server";

import { Response } from "@/server-actions/types/response";
import {
  BlogLinkServiceImplementation,
  BlogLinkServiceReturnType,
} from "@/services/prisma/blog-link/blog-link-service";
import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/shared/lib/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const DeleteBlogLinkSchema = z.object({
  blogId: IdSchema,
});

export const deleteBlogLinkHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<Response<BlogLinkServiceReturnType<"deleteBlogLink">>> => {
  try {
    const { data: validatedData, error } = DeleteBlogLinkSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) return failure("Invalid ID format");
    const blogLinkService = new BlogLinkServiceImplementation(prisma);
    return {
      success: true,
      data: await blogLinkService.deleteBlogLink(validatedData.id),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
