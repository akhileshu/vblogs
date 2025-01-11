import prisma from "@/shared/lib/prisma";

export const deleteAll = async () => {
  await prisma.blog.deleteMany();
};
