import prisma from "@/lib/prisma";

export const getAllGoalsFromDb = async () => {
  try {
    const goals = await prisma.goal.findMany({
    });
    return goals;
  } catch (error) {
    console.error("Error fetching goals:", error);
    throw error;
  }
};

export const getTechnologiesByGoalIdFromDb = async (goalId: string) => {
  try {
    const technologies = await prisma.technology.findMany({
      where: {
        goalId: goalId,
      },
    });
    return technologies;
  } catch (error) {
    console.error(`Error fetching technologies for goalId ${goalId}:`, error);
    throw error;
  }
};

export const getTopicsByTechnologyIdFromDb = async (technologyId: string) => {
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
    console.error(
      `Error fetching topics for technologyId ${technologyId}:`,
      error
    );
    throw error;
  }
};

export const getTagsByTopicIdFromDb = async (topicId: string) => {
  try {
    const tags = await prisma.tag.findMany({
      where: {
        topicId: topicId,
      },
    });
    return tags;
  } catch (error) {
    console.error(`Error fetching tags for topicId ${topicId}:`, error);
    throw error;
  }
};
