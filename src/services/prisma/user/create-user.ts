import type{ PrismaClient, Prisma } from "@prisma/client";

export async function createUser(prisma: PrismaClient, data: Prisma.UserCreateInput) {
  return prisma.user.create({ data });
}
