"use server";

import { Response } from "@/server-actions/types/response";
import { BlogReadHistoryServiceImplementation ,BlogReadHistoryServiceReturnType} from "@/services/prisma/blog-read-history/blog-read-history-service";
import prisma from "@/shared/lib/prisma";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";


export const getAllBlogReadHistorysHandler = async (
): Promise<
  Response<
      BlogReadHistoryServiceReturnType<"getAllBlogReadHistorys">
  >
> => {
  try {

    const blogReadHistoryService = new BlogReadHistoryServiceImplementation(prisma);
    return { success: true, data: await blogReadHistoryService.getAllBlogReadHistorys() };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler