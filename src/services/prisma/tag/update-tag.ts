import { PrismaClient, Prisma } from "@prisma/client";

export async function updateTag(prisma: PrismaClient, id: string, data: Prisma.TagUpdateInput) {
  return prisma.tag.update({ where: { id }, data });
}
