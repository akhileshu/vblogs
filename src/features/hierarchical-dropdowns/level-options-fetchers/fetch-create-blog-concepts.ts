
import { getAllGoalsHandler } from "@/server-actions/prisma-handlers/goal";
import { FetchOptionsForLevel, Option, SELECT_TYPE } from "../types";
import { getTechnologiesByGoalIdHandler } from "@/server-actions/prisma-handlers/technology/get-technologies-by-goal-id-Handler";
import { getTopicsByTechnologyIdHandler } from "@/server-actions/prisma-handlers/topic/get-topics-by-technology-id-Handler";
import { getTagsByTopicIdHandler } from "@/server-actions/prisma-handlers/tag/get-tags-by-topic-id-Handler";

export const fetchCreateBlogConcepts: FetchOptionsForLevel<Option> = async (
  levelIndex,
  selectedOptions
) => {
  switch (levelIndex) {
    case 0:
      let result = await getAllGoalsHandler();
      if (!result.success) return null;
      return {
        label: "Goal",
        options: result.data,
        selectType: SELECT_TYPE.single,
      };

    case 1:
      result = await getTechnologiesByGoalIdHandler(
        selectedOptions[0].id
      );
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
        label: "Topic",
        options: result.data,
        selectType: SELECT_TYPE.single,
      };
    case 3:
     result = await getTagsByTopicIdHandler(selectedOptions[0].id);
      if (!result.success) return null;
      return {
        label: "Tags",
        options: result.data,
        selectType: SELECT_TYPE.multiple,
      };

    default:
      return null;
  }
};
