import type { PrismaClient } from "@prisma/client";

export async function getTopicsByTechnologyId(
  prisma: PrismaClient,
  technologyId: string
) {
  try {
    const topics = await prisma.topic.findMany({
      where: {
        technologyId: technologyId,
      },
      //   include: {
      //     tags: true, // Optionally include related tags
      //   },
    });
    return topics;
  } catch (error) {
    throw error;
  }
}
