"use server";

import { Response } from "@/server-actions/types/response";
import { BlogReadHistoryServiceImplementation,BlogReadHistoryServiceReturnType } from "@/services/prisma/blog-read-history/blog-read-history-service";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const CreateBlogReadHistorySchema = z.object({

});

export const createBlogReadHistoryHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    BlogReadHistoryServiceReturnType<"createBlogReadHistory">,
    z.infer<typeof CreateBlogReadHistorySchema>
  >
> => {
  try {
    const { data: validatedData, error } = CreateBlogReadHistorySchema.safeParse(Object.fromEntries(formData.entries()));
    if (error) return failureWithFieldErrors(error);
    const blogReadHistoryService = new BlogReadHistoryServiceImplementation(prisma);
    return { success: true, data: await blogReadHistoryService.createBlogReadHistory(validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler