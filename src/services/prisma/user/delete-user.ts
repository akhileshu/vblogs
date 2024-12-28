import type{ PrismaClient } from "@prisma/client";

export async function deleteUser(prisma: PrismaClient, id: string) {
  return prisma.user.delete({ where: { id } });
}
