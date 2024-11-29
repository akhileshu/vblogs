"use server";

import {
  getAllGoalsFromDb,
  getTagsByTopicIdFromDb,
  getTechnologiesByGoalIdFromDb,
  getTopicsByTechnologyIdFromDb,
} from "@/database/getCategory";

export const getAllGoals = async () => {
  //   if (1) throw new Error("Internal Server Error");

  return await getAllGoalsFromDb();
};
export const getTechnologiesByGoalId = async (goalId: string) => {
  return await getTechnologiesByGoalIdFromDb(goalId);
};
export const getTopicsByTechnologyId = async (technologyId: string) => {
  return await getTopicsByTechnologyIdFromDb(technologyId);
};
export const getTagsByTopicId = async (topicId: string) => {
  return await getTagsByTopicIdFromDb(topicId);
};
