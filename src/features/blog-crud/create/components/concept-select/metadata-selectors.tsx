"use client";
import { OnSelectedTagsModify } from "@/app/(Site)/blog/create/fill-metadata/page";
import {
  getAllGoals,
  getTagsByTopicId,
  getTechnologiesByGoalId,
  getTopicsByTechnologyId,
} from "../../actions/getCategory";
import { SelectorDropdown } from "./selectDropdown";

interface GoalSelectorProps {
  selectedGoalId: string | null;
  onSelectedGoalIdChange: (id: string | null) => void;
}

export const GoalSelector = ({
  selectedGoalId,
  onSelectedGoalIdChange,
}: GoalSelectorProps) => {
  return (
    <SelectorDropdown
      selectType={"singleSelect"}
      KeyText={"Goal"}
      fetchData={getAllGoals}
      fetchDataDependencies={[]}
      selectedId={selectedGoalId}
      onSelectedIdChange={onSelectedGoalIdChange}
      getOptionKey={(goal) => goal.id}
      getOptionLabel={(goal) => goal.title}
    />
  );
};

interface TechSelectorProps {
  selectedGoalId: string;
  selectedTechId: string | null;
  onSelectedTechIdChange: (id: string | null) => void;
}

export const TechSelector = ({
  selectedTechId,
  selectedGoalId,
  onSelectedTechIdChange,
}: TechSelectorProps) => {
  return (
    <SelectorDropdown
      selectType={"singleSelect"}
      KeyText={"Technology"}
      fetchData={() => getTechnologiesByGoalId(selectedGoalId)}
      selectedId={selectedTechId}
      fetchDataDependencies={[selectedGoalId]}
      onSelectedIdChange={onSelectedTechIdChange}
      getOptionKey={(tech) => tech.id}
      getOptionLabel={(tech) => tech.title}
    />
  );
};

interface TopicSelectorProps {
  selectedTopicId: string | null;
  onSelectedTopicIdChange: (id: string | null) => void;
  selectedTechId: string;
}

export const TopicSelector = ({
  selectedTopicId,
  selectedTechId,
  onSelectedTopicIdChange,
}: TopicSelectorProps) => {
  return (
    <SelectorDropdown
      selectType="singleSelect"
      KeyText={"Topic"}
      fetchData={() => getTopicsByTechnologyId(selectedTechId)}
      fetchDataDependencies={[selectedTechId]}
      selectedId={selectedTopicId}
      onSelectedIdChange={onSelectedTopicIdChange}
      getOptionKey={(topic) => topic.id}
      getOptionLabel={(topic) => topic.title}
    />
  );
};
interface TagsSelectorProps {
  selectedTopicId: string;
  onSelectedTagsModify: OnSelectedTagsModify;
  selectedTagIds: string[];
}

export const TagsSelector = ({
  selectedTagIds,
  selectedTopicId,
  onSelectedTagsModify,
}: TagsSelectorProps) => {
  return (
    <SelectorDropdown
      selectType="multiSelect"
      KeyText={"Tags"}
      fetchData={() => getTagsByTopicId(selectedTopicId)}
      fetchDataDependencies={[selectedTopicId]}
      selectedIds={selectedTagIds}
      onSelectedTagsModify={onSelectedTagsModify}
      getOptionKey={(Tags) => Tags.id}
      getOptionLabel={(Tags) => Tags.title}
    />
  );
};
