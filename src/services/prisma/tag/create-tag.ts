import type{ PrismaClient, Prisma } from "@prisma/client";

export async function createTag(prisma: PrismaClient, data: Prisma.TagCreateInput) {
  return prisma.tag.create({ data });
}
