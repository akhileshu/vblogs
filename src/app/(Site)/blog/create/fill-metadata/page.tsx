"use client";
import { GoalSelector, TechSelector, TopicSelector } from "@/features/blog-crud/create/components/client";
import { useState } from "react";

export default function SelectMetadata() {
  const [selectedGoalId, setSelectedGoalId] = useState<string | null>(null);
  const [selectedTechId, setSelectedTechId] = useState<string | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  return (
    <div>
      <GoalSelector
        selectedGoalId={selectedGoalId}
        setSelectedGoalId={setSelectedGoalId}
        setSelectedTechId={setSelectedTechId}
        setSelectedTopicId={setSelectedTopicId}
      />

      {selectedGoalId && (
        <TechSelector
          selectedGoalId={selectedGoalId}
          selectedTechId={selectedTechId}
          setSelectedTechId={setSelectedTechId}
          setSelectedTopicId={setSelectedTopicId}
        />
      )}

      {selectedTechId && (
        <TopicSelector
          selectedTechId={selectedTechId}
          selectedTopicId={selectedTopicId}
          setSelectedTopicId={setSelectedTopicId}
        />
      )}
    </div>
  );
}
