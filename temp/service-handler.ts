"use server";

import { getServerSessionUserByRole } from "@/features/Auth/utils/getServerSessionUtils";
import { Response } from "@/server-actions/types/response";
import { BlogService } from "@/services/prisma/blog/blog-service";
import prisma from "@/shared/lib/prisma";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { z } from "zod";


type ZodErrorType<Schema extends z.ZodSchema> = z.ZodError<z.infer<Schema>>;

const AddBlogMetadataSchema = z.object({
  title: z.string().min(1, "Title is required"),
  topicId: z.string().uuid("Invalid Topic ID"),
  tagIds: z.string().transform((tagsString) => {
    const parsedTags = JSON.parse(tagsString);
    return z.array(z.string().uuid("Invalid Tag ID")).parse(parsedTags);
  }),
});

const addMetaDataV2 = async (
  data: unknown
): Promise<
  Response<
    Awaited<ReturnType<BlogService["createBlog"]>>
  >
> => {
  try {
    const { data: validatedData, error } =
      AddBlogMetadataSchema.safeParse(data);
    if (error)
      return {
        success: false,
        fieldErrors: error.formErrors.fieldErrors,
        errorMsg: "validation failed",
      };
    const blogService = new BlogService(prisma);
    return { success: true, data: await blogService.createBlog(validatedData) };
  } catch (error) {
    //handle error thrown by prisma service - throws parsed/understandable error message in Error object
    return {
      success: false,
      errorMsg: getErrorMsg(error),
    };
  }
};

const { data, errorMsg, fieldErrors, success } = await addMetaDataV2({
  title: "title",
  topicId: "topicId",
  tagIds: "tagIds",
});

function handleZodError<Schema extends z.ZodSchema>(
  schema: Schema,
  error: ZodErrorType<Schema>
) {
  return { fieldErrors: error.formErrors.fieldErrors };
}
