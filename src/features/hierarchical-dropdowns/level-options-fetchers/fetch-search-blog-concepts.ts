import { getAllGoalsHandler } from "@/server-actions/prisma-handlers/goal";
import { FetchOptionsForLevel, Option, SELECT_TYPE } from "../types";
import { getTechnologiesByGoalIdHandler } from "@/server-actions/prisma-handlers/technology/get-technologies-by-goal-id-Handler";
import { getTopicsByTechnologyIdHandler } from "@/server-actions/prisma-handlers/topic/get-topics-by-technology-id-Handler";

export const fetchSearchBlogConcepts: FetchOptionsForLevel<Option> = async (
  levelIndex,
  selectedOptions
) => {
  let result;
  switch (levelIndex) {
    case 0:
      result = await getAllGoalsHandler();
      if (!result.success) return null;
      return {
        label: "Goal",
        options: result.data,
        selectType: SELECT_TYPE.single,
      };

    case 1:
      result = await getTechnologiesByGoalIdHandler(selectedOptions[0].id);
      if (!result.success) return null;
      return {
        label: "Technology",
        options: result.data,
        selectType: SELECT_TYPE.single,
      };
    case 2:
      result = await getTopicsByTechnologyIdHandler(selectedOptions[0].id);
      if (!result.success) return null;
      return {
        label: "Topics",
        options: result.data,
        selectType: SELECT_TYPE.multiple,
      };

    default:
      return null;
  }
};
