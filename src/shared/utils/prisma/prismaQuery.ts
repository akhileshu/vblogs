"use server";
import prisma from "./prismaClient";

export async function main() {
  // Example: Fetch all users
  try {
    // const users = await prisma.blog.findMany();
    // console.log(users);
  } catch (error) {
    console.log({ dbError: error });
  } finally {
    await prisma.$disconnect();
  }
}


