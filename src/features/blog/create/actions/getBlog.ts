"use server";

import { getServerSessionUserByRole } from "@/features/Auth/utils/getServerSessionUtils";
import { getBlogContentBySlugFromDb, getBlogsByAuthorIdFromDb } from "@/shared/database/getBlog";

export const getBlogContentBySlug = async (slug: string) => {
  return await getBlogContentBySlugFromDb(slug);
};

export const getLoggedInAuthorBlogs = async () => {
   const user = await getServerSessionUserByRole("AUTHOR");
   if (!user) throw new Error("Please Login as Author");
  return await getBlogsByAuthorIdFromDb(user.id);
};
