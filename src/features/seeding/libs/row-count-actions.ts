"use server";

import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const getCachedRowCount = async (model: string) =>
  unstable_cache(
    async () => {
      // @ts-expect-error accessing dynamic property prisma.model
      const count = (await prisma[model].count()) as number;
      return count;
    },
    [model], // Include model in cache key
    { tags: [`row-count-${model}`] } // Dynamically generate tags
  )();
