import { PrismaClient, Prisma } from "@prisma/client";

export async function updateUser(prisma: PrismaClient, id: string, data: Prisma.UserUpdateInput) {
  return prisma.user.update({ where: { id }, data });
}
