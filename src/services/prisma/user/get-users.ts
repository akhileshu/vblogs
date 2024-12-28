import type{ PrismaClient } from "@prisma/client";

export async function getAllUsers(prisma: PrismaClient) {
  return prisma.user.findMany();
}
