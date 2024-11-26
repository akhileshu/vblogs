import prisma from "@/lib/prisma";

export const deleteAll = async () => {
  await prisma.goal.deleteMany();
  await prisma.technology.deleteMany();
  await prisma.topic.deleteMany();
  await prisma.tag.deleteMany();
};
