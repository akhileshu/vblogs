"use server";

import { Response } from "@/server-actions/types/response";
import { BlogLinkServiceImplementation ,BlogLinkServiceReturnType} from "@/services/prisma/blog-link/blog-link-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllBlogLinksHandler = async (
): Promise<
  Response<
      BlogLinkServiceReturnType<"getAllBlogLinks">
  >
> => {
  try {

    const blogLinkService = new BlogLinkServiceImplementation(prisma);
    return { success: true, data: await blogLinkService.getAllBlogLinks() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler