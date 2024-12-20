"use server"
import { revalidateTag } from "next/cache";

export const revalidateTagUtil = async (tag: string) => {
  revalidateTag(tag);
};
