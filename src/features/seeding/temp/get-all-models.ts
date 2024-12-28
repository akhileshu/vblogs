"use server";

import prisma from "@/shared/lib/prisma";

const prismaModelsHardCodedList = [
  "goal",
  "technology",
  "topic",
  "tag",
  "user",
  "userInterest",
  "blog",
  "video",
  "videoSection",
  "blogContent",
  "tagsOnBlogs",
];

export const allPrismaModels = async () => {
  return Object.keys(prisma).filter(
    (key) =>
      !key.startsWith("_") &&
      !key.startsWith("$") &&
      // @ts-expect-error accessing dynamic property prisma.model
      typeof prisma[key] === "object"
  );
};
