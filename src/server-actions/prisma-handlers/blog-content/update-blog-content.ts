"use server";

import { Response } from "@/server-actions/types/response";
import { BlogContentServiceImplementation ,BlogContentServiceReturnType } from "@/services/prisma/blog-content/blog-content-service";import prisma from "@/shared/lib/prisma";
import { z } from "zod";
import {
  failure,
  failureWithFieldErrors,
} from "@/server-actions/utils/response";
import { FieldsError } from "@/shared/lib/errors/customError";

const UpdateBlogContentSchema = z.object({
id: z.string().uuid(),
});

export const updateBlogContentHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
       BlogContentServiceReturnType<"updateBlogContent">,
    z.infer<typeof UpdateBlogContentSchema>
  >
> => {
  try {
    const { data: {id,...validatedData}, error } = UpdateBlogContentSchema.safeParse(formData);
    if (error) return failureWithFieldErrors(error);
    const blogContentService = new BlogContentServiceImplementation(prisma);
    return { success: true, data: await blogContentService.updateBlogContent(id,validatedData) };
  } catch (error) {
    if(error instanceof FieldsError)return failureWithFieldErrors(error);
    return failure(error);
  }
};

// End of handler