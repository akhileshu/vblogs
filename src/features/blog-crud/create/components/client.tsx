// app/blog/create/fill-metadata/client/GoalSelector.tsx
"use client";
import { useFetchData } from "@/hooks/useFetch";
import { ReactNode } from "react";
import {
  getAllGoals,
  getTechnologiesByGoalId,
  getTopicsByTechnologyId,
} from "../actions/getCategory";

interface GoalSelectorProps {
  selectedGoalId?: string | null;
  setSelectedGoalId: (id: string) => void;
  setSelectedTechId: (id: string) => void;
  setSelectedTopicId: (id: string) => void;
}

export const GoalSelector = ({
  selectedGoalId,
  setSelectedGoalId,
  setSelectedTechId,
  setSelectedTopicId,
}: GoalSelectorProps) => {
  const { data, error, isLoading } = useFetchData(() => getAllGoals(), []);

  return (
    <LoadingAndError isLoading={isLoading} error={error}>
      <select
        onChange={(e) => {
          setSelectedGoalId(e.target.value);
          setSelectedTechId("");
          setSelectedTopicId("");
        }}
        value={selectedGoalId || ""}
      >
        <option value="">Select Goal</option>
        {data?.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.title}
          </option>
        ))}
      </select>
    </LoadingAndError>
  );
};

// app/blog/create/fill-metadata/client/TechSelector.tsx

interface TechSelectorProps {
  selectedGoalId: string;
  selectedTechId?: string | null;
  setSelectedTechId: (id: string) => void;
  setSelectedTopicId: (id: string) => void;
}

export const TechSelector = ({
  selectedTechId,
  setSelectedTechId,
  selectedGoalId,
  setSelectedTopicId,
}: TechSelectorProps) => {
  const { data, error, isLoading } = useFetchData(
    () => getTechnologiesByGoalId(selectedGoalId),
    [selectedGoalId]
  );

  return (
    <LoadingAndError isLoading={isLoading} error={error}>
      <select
        onChange={(e) => {
          setSelectedTechId(e.target.value);
          setSelectedTopicId("");
        }}
        value={selectedTechId || ""}
      >
        <option value="">Select Technology</option>
        {data?.map((tech) => (
          <option key={tech.id} value={tech.id}>
            {tech.title}
          </option>
        ))}
      </select>
    </LoadingAndError>
  );
};

// app/blog/create/fill-metadata/client/TopicSelector.tsx

interface TopicSelectorProps {
  selectedTopicId?: string | null;
  setSelectedTopicId: (id: string) => void;
  selectedTechId: string;
}

export const TopicSelector = ({
  selectedTopicId,
  selectedTechId,
  setSelectedTopicId,
}: TopicSelectorProps) => {
  const { data, error, isLoading } = useFetchData(
    () => getTopicsByTechnologyId(selectedTechId),
    [selectedTechId]
  );

  return (
    <LoadingAndError isLoading={isLoading} error={error}>
      <select
        onChange={(e) => setSelectedTopicId(e.target.value)}
        value={selectedTopicId || ""}
      >
        <option value="">Select Topic</option>
        {data?.map((topic) => (
          <option key={topic.id} value={topic.id}>
            {topic.title}
          </option>
        ))}
      </select>
    </LoadingAndError>
  );
};

const LoadingAndError = ({
  isLoading,
  error,
  children,
}: {
  isLoading: boolean;
  error: string | null;
  children: ReactNode;
}) => {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return children;
};
