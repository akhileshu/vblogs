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

export const getBlogLinkByIdHandler = async (
  id: string
): Promise<Response<BlogLinkServiceReturnType<"getBlogLinkById">>> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error) return failure("Invalid ID format");
    const blogLinkService = new BlogLinkServiceImplementation(prisma);
    return {
      success: true,
      data: await blogLinkService.getBlogLinkById(validatedId),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
