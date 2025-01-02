import { PrismaClient } from "@prisma/client";

//note: js file , to be able to use in plopfile.js
export const allPrismaModels = () => {
  const prisma = new PrismaClient();
  return Object.keys(prisma).filter(
    (key) =>
      !key.startsWith("_") &&
      !key.startsWith("$") &&
      typeof prisma[key] === "object"
  );
};
