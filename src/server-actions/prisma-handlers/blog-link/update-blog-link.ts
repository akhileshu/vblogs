"use server";

import { Response } from "@/server-actions/types/response";
import {
  BlogLinkServiceImplementation,
  BlogLinkServiceReturnType,
} from "@/services/prisma/blog-link/blog-link-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const UpdateBlogLinkSchema = z.object({
  id: z.string().uuid(),
});

export const updateBlogLinkHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    BlogLinkServiceReturnType<"updateBlogLink">,
    z.infer<typeof UpdateBlogLinkSchema>
  >
> => {
  try {
    const {
      data: { id, ...validatedData },
      error,
    } = UpdateBlogLinkSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error) return failureWithFieldErrors(error);
    const blogLinkService = new BlogLinkServiceImplementation(prisma);
    return {
      success: true,
      data: await blogLinkService.updateBlogLink(id, validatedData),
    };
  } catch (error) {
    if (error instanceof FieldsError) return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler
