"use client";
import { OnSelectedTagsModify } from "@/app/(Site)/blog/create/fill-metadata/page";
import {
  getAllGoals,
  getTagsByTopicId,
  getTechnologiesByGoalId,
  getTopicsByTechnologyId,
} from "../actions/getCategory";
import { MultiSelectDropdown, SelectorDropdown } from "./searchFromList";

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
      fetchData={getAllGoals}
      fetchDataDependencies={[]}
      selectedId={selectedGoalId}
      onSelectedIdChange={onSelectedGoalIdChange}
      placeholder="Search Goal"
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
  selectedGoalId,onSelectedTechIdChange
}: TechSelectorProps) => {
  return (
    <SelectorDropdown
      fetchData={() => getTechnologiesByGoalId(selectedGoalId)}
      selectedId={selectedTechId}
      fetchDataDependencies={[selectedGoalId]}
      onSelectedIdChange={onSelectedTechIdChange}
      placeholder="Search Technology"
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
      fetchData={() => getTopicsByTechnologyId(selectedTechId)}
      fetchDataDependencies={[selectedTechId]}
      selectedId={selectedTopicId}
      onSelectedIdChange={onSelectedTopicIdChange}
      placeholder="Search Topic"
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
    <MultiSelectDropdown
      fetchData={() => getTagsByTopicId(selectedTopicId)}
      fetchDataDependencies={[selectedTopicId]}
      selectedIds={selectedTagIds}
      onSelectedTagsModify={onSelectedTagsModify}
      placeholder="Search Tags"
      getOptionKey={(Tags) => Tags.id}
      getOptionLabel={(Tags) => Tags.title}
    />
  );
};
