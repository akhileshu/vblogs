"use client";
import { useFetch } from "@/shared/hooks/useFetch";
import {
  getAllGoals,
  getTagsByTopicId,
  getTechnologiesByGoalId,
  getTopicsByTechnologyId,
} from "../src/features/blog/create/actions/getCategory";

interface SelectGoalProps {
  className?: string;
}

import {
  SelectionProvider,
  useSelection,
} from "./blogMetadataSelectionContextProvider";

const SelectMetadata = ({ className }: SelectGoalProps) => {
  const {
    selectedGoal,
    setSelectedGoal,
    selectedTechnology,
    setSelectedTechnology,
    selectedTopic,
    setSelectedTopic,
    setSelectedTag,
  } = useSelection();

  // Fetch goals
  const {
    data: goals,
    error: goalsError,
    loading: goalsLoading,
  } = useFetch(() => getAllGoals());

  // Fetch technologies when goal is selected

  const {
    data: technologies,
    error: techError,
    loading: techLoading,
  } = useFetch(() =>
    selectedGoal ? getTechnologiesByGoalId(selectedGoal) : null
  );

  // Fetch topics when technology is selected
  const {
    data: topics,
    error: topicError,
    loading: topicLoading,
  } = useFetch(() =>
    selectedTechnology ? getTopicsByTechnologyId(selectedTechnology) : null
  );

  // Fetch tags when topic is selected
  const {
    data: tags,
    error: tagError,
    loading: tagLoading,
  } = useFetch(() => (selectedTopic ? getTagsByTopicId(selectedTopic) : null));

  // Handle the selection change
  const handleGoalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const goalId = e.target.value;
    setSelectedGoal(goalId);
    setSelectedTechnology(null); // Reset selected technology when goal changes
    setSelectedTopic(null); // Reset selected topic when technology changes
    setSelectedTag(null); // Reset selected tag when topic changes
  };

  const handleTechnologyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTechnology(e.target.value);
    setSelectedTopic(null); // Reset selected topic when technology changes
    setSelectedTag(null); // Reset selected tag when topic changes
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopic(e.target.value);
    setSelectedTag(null); // Reset selected tag when topic changes
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTag(e.target.value);
  };

  return (
    <div className={className}>
      <select onChange={handleGoalChange}>
        <option value="">Select a goal</option>
        {goals?.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.title}
          </option>
        ))}
      </select>

      {selectedGoal && (
        <select onChange={handleTechnologyChange}>
          <option value="">Select a technology</option>
          {technologies?.map((tech) => (
            <option key={tech.id} value={tech.id}>
              {tech.title}
            </option>
          ))}
        </select>
      )}

      {selectedTechnology && (
        <select onChange={handleTopicChange}>
          <option value="">Select a topic</option>
          {topics?.map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.title}
            </option>
          ))}
        </select>
      )}

      {selectedTopic && (
        <select onChange={handleTagChange}>
          <option value="">Select a tag</option>
          {tags?.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.title}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export function SelectMetadataWrapper() {
  return (
    <SelectionProvider>
      <SelectMetadata />
    </SelectionProvider>
  );
}
