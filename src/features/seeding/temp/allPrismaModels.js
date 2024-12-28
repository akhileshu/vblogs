
import { PrismaClient } from "@prisma/client";

export const allPrismaModels = () => {
  const prisma = new PrismaClient();
  return Object.keys(prisma).filter(
    (key) =>
      !key.startsWith("_") &&
      !key.startsWith("$") &&
      // @ts-expect-error accessing dynamic property prisma.model
      typeof prisma[key] === "object"
  );
};
