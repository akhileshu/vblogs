"use server";

import {
  getServerSessionUserByRole
} from "@/features/Auth/utils/getServerSessionUtils";
import prisma from "@/lib/prisma";
import { z } from "zod";

// Zod schema for validation
// const tagSchema = z.object({
//   id: z.string().uuid("Invalid Tag ID"),
//   title: z.string().min(1, "Tag title is required"),
// });

const AddBlogMetadataSchema = z.object({
  title: z.string().min(1, "Title is required"),
  topicId: z.string().uuid("Invalid Topic ID"),
  tags: z.string().transform((tagsString) => {
    const parsedTags = JSON.parse(tagsString);
    return z.array(z.string().uuid("Invalid Tag ID")).parse(parsedTags); //After parsing the JSON string, the parsedTags is validated against an array of tagSchema objects.
  }),
});

export const addBlogMetaData = async (
  prevState: unknown,
  formData: FormData
) => {
  //   if (1) throw new Error("Internal Server Error");
  const { data, error } = AddBlogMetadataSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (error) return { fieldErrors: error.formErrors.fieldErrors };
  const { tags, title, topicId } = data;
  const user = await getServerSessionUserByRole("AUTHOR");
  if (!user)
    return { errorMsg: "Please Login as Author" };
  const blogData = await prisma.blog.create({
    data: {
      title,
      topicId,
      authorId: user.id,
      tags: {
        create: tags.map((tag) => ({
          tagId: tag.id
        })),
      },
    },
  });

  return { data: blogData };
};
