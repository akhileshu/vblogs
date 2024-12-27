"use server";

import { getServerSessionUserByRole } from "@/features/Auth/utils/getServerSessionUtils";
import prisma from "@/shared/lib/prisma";
import { z } from "zod";

// Zod schema for validation
// const tagSchema = z.object({
//   id: z.string().uuid("Invalid Tag ID"),
//   title: z.string().min(1, "Tag title is required"),
// });

const SaveBlogContentSchema = z.object({
  slug: z.string().min(1, "blog slug is required"),
  content: z.string().min(1, "blog content is required"),
});

export const saveBlogContent = async (
  prevState: unknown,
  formData: FormData
) => {
  const { data, error } = SaveBlogContentSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (error) return { fieldErrors: error.formErrors.fieldErrors };
  const { slug, content } = data;
  const user = await getServerSessionUserByRole("AUTHOR");
  if (!user) return { errorMsg: "Please Login as Author" };
  const blogData = await prisma.blog.update({
    where: {
      slug,
    },
    data: {
      content: {
        upsert: {
          update: {
            fullContent: JSON.parse(content), 
          },
          create: {
            fullContent: JSON.parse(content),
          },
        },
      },
    },
  });

  return { data: blogData };
};
