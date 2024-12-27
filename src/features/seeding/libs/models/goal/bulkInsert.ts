import prisma from "@/shared/lib/prisma";
import { jsonData } from "./data";

export const bulkInsert = async () => {
  for (const goalData of jsonData) {
    const { goal, technologies } = goalData;

    const createdGoal = await prisma.goal.create({
      data: {
        title: goal,
        technologies: {
          create: technologies.map((tech) => ({
            title: tech.title,
            topics: {
              create: tech.topics.map((topic) => ({
                title: topic.title,
                tags: { create: topic.tags.map((tag) => ({ title: tag })) },
              })),
            },
          })),
        },
      },
    });

    console.log(`Created Goal: ${createdGoal.title}`);
  }
};
