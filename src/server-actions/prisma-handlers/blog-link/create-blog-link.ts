"use server";

import { Response } from "@/server-actions/types/response";
import { BlogLinkServiceImplementation,BlogLinkServiceReturnType } from "@/services/prisma/blog-link/blog-link-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const CreateBlogLinkSchema = z.object({

});

export const createBlogLinkHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    BlogLinkServiceReturnType<"createBlogLink">,
    z.infer<typeof CreateBlogLinkSchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateBlogLinkSchema.safeParse(Object.fromEntries(formData.entries()));
    if (error) return failureWithFieldErrors(error);
    const blogLinkService = new BlogLinkServiceImplementation(prisma);
    return { success: true, data: await blogLinkService.createBlogLink(validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler