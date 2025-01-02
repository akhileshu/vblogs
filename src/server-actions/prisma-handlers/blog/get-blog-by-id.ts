"use server";

import { Response } from "@/server-actions/types/response";
import { failure } from "@/server-actions/utils/response";
import { IdSchema } from "@/server-actions/utils/zod";
import { BlogService } from "@/services/prisma/blog/blog-service";
import prisma from "@/shared/lib/prisma";

export const getBlogByIdHandler = async (
  id: string
): Promise<
  Response<
    Awaited<ReturnType<BlogService["getBlogById"]>>
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)return failure("Invalid ID format");
    const blogService = new BlogService(prisma);
    return { success: true, data: await blogService.getBlogById(validatedId) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return failure(error)
  }
};
