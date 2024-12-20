import prisma from "@/shared/lib/prisma";

export const deleteAll = async () => {
  await prisma.goal.deleteMany();
  await prisma.technology.deleteMany();
  await prisma.topic.deleteMany();
  await prisma.tag.deleteMany();
};
