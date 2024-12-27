"use server";

import {
  getAllGoalsFromDb,
  getTagsByTopicIdFromDb,
  getTechnologiesByGoalIdFromDb,
  getTopicsByTechnologyIdFromDb,
} from "@/shared/database/getCategory";

export const getAllGoals = async () => {
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
