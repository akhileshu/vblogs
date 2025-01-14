"use server";

import { Response } from "@/server-actions/types/response";
import { BlogReadHistoryServiceImplementation ,BlogReadHistoryServiceReturnType } from "@/services/prisma/blog-read-history/blog-read-history-service";import prisma from "@/shared/lib/prisma";
import { IdSchema } from "@/server-actions/utils/zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

export const getBlogReadHistoryByIdHandler = async (
  id: string
): Promise<
  Response<
       BlogReadHistoryServiceReturnType<"getBlogReadHistoryById">
  >
> => {
  try {
    const { data: validatedId, error } = IdSchema.safeParse(id);
    if (error)
      return failure("Invalid ID format");
    const blogReadHistoryService = new BlogReadHistoryServiceImplementation(prisma);
    return { success: true, data: await blogReadHistoryService.getBlogReadHistoryById(validatedId) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler