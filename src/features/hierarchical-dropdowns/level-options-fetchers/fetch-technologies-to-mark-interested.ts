import { getCachedAllGoalsHandler } from "@/server-actions/prisma-handlers/goal";
import { getTechnologiesByGoalIdHandler } from "@/server-actions/prisma-handlers/technology/get-technologies-by-goal-id";
import { FetchOptionsForLevel, Option, SELECT_TYPE } from "../types";

export const fetchTechnologiesToMarkInterested: FetchOptionsForLevel<
  Option
> = async (levelIndex, selectedOptions) => {
  let result;
  switch (levelIndex) {
    case 0:
      result = await getCachedAllGoalsHandler();
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
        selectType: SELECT_TYPE.multiple,
      };
    default:
      return null;
  }
};
