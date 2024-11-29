
import prisma from "@/lib/prisma";

export const prismaModelsHardCodedList = [
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

export const allPrismaModels = Object.keys(prisma).filter(
  (key) =>
    !key.startsWith("_") &&
    !key.startsWith("$") &&
    // @ts-expect-error accessing dynamic property prisma.model
    typeof prisma[key] === "object"
);
