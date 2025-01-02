"use server";

import { Response } from "@/server-actions/types/response";
import { BlogService } from "@/services/prisma/blog/blog-service";
import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";

const SaveBlogContentSchema = z.object({
  slug: z.string().min(1, "blog slug is required"),
  content: z.string().min(1, "blog content is required"),
});

export const saveBlogContentHandler = async (
  prevState: unknown,
  formData: FormData
): Promise<
  Response<
    Awaited<ReturnType<BlogService["saveBlogContent"]>>,
    z.infer<typeof SaveBlogContentSchema>
  >
> => {
  try {
    const { data: validatedData, error } = SaveBlogContentSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const blogService = new BlogService(prisma);
    return {
      success: true,
      data: await blogService.saveBlogContent(validatedData),
    };
  } catch (error) {
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};
