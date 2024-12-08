"use client";
import {
  GoalSelector,
  TagsSelector,
  TechSelector,
  TopicSelector,
} from "@/features/blog-crud/create/components/client";
import { useState } from "react";
export type OnSelectedTagsModify=(tagId: string, action: "add" | "remove") => void

export default function SelectMetadata() {
  const [selectedGoalId, setSelectedGoalId] = useState<string | null>(null);
  const [selectedTechId, setSelectedTechId] = useState<string | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);

  function onSelectedGoalIdChange(goalId: string | null) {
    setSelectedGoalId(goalId);
    setSelectedTechId(null);
    setSelectedTopicId(null);
    setSelectedTagIds([]);
  }
  function onSelectedTechIdChange(techId: string | null) {
    setSelectedTechId(techId);
    setSelectedTopicId(null);
    setSelectedTagIds([]);
  }
  function onSelectedTopicIdChange(topicId: string | null) {
    setSelectedTopicId(topicId);
    setSelectedTagIds([]);
  }
  function onSelectedTagsModify(tagId: string, action: "add" | "remove") {
    setSelectedTagIds(
      action === "add"
        ? [...selectedTagIds, tagId]
        : selectedTagIds.filter((id) => id !== tagId)
    );
  }
  return (
    <div className="flex gap-2 flex-wrap">
      <GoalSelector
        selectedGoalId={selectedGoalId}
        onSelectedGoalIdChange={onSelectedGoalIdChange}
      />

      {selectedGoalId && (
        <TechSelector
          selectedGoalId={selectedGoalId}
          selectedTechId={selectedTechId}
          onSelectedTechIdChange={onSelectedTechIdChange}
        />
      )}

      {selectedTechId && (
        <TopicSelector
          selectedTechId={selectedTechId}
          selectedTopicId={selectedTopicId}
          onSelectedTopicIdChange={onSelectedTopicIdChange}
        />
      )}
      {selectedTopicId && (
        <TagsSelector
          selectedTopicId={selectedTopicId}
          onSelectedTagsModify={onSelectedTagsModify}
          selectedTagIds={selectedTagIds}
        />
      )}
    </div>
  );
}
