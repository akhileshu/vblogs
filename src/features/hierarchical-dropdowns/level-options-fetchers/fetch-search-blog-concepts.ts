import {
  getAllGoals,
  getTechnologiesByGoalId,
  getTopicsByTechnologyId,
} from "@/features/blog/create/actions/getCategory";
import { FetchOptionsForLevel, Option, SELECT_TYPE } from "../types";

export const fetchSearchBlogConcepts: FetchOptionsForLevel<Option> = async (
  levelIndex,
  selectedOptions
) => {
  switch (levelIndex) {
    case 0:
      return {
        label: "Goal",
        options: await getAllGoals(),
        selectType: SELECT_TYPE.single,
      };

    case 1:
      return {
        label: "Technology",
        options: await getTechnologiesByGoalId(selectedOptions[0].id),
        selectType: SELECT_TYPE.single,
      };
    case 2:
      return {
        label: "Topics",
        options: await getTopicsByTechnologyId(selectedOptions[0].id),
        selectType: SELECT_TYPE.multiple,
      };

    default:
      return null;
  }
};
