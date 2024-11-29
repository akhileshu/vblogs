"use client";
import {
  getAllGoals,
  getTagsByTopicId,
  getTechnologiesByGoalId,
  getTopicsByTechnologyId,
} from "../actions/getCategory";
import { useGoals } from "../context/selectMetadata/goals";
import { useTechnologies } from "../context/selectMetadata/technologies";
import { useTopics } from "../context/selectMetadata/topics";
import { useTags } from "../context/selectMetadata/tags";
import { useEffect } from "react";
import { catchErrorTyped } from "@/lib/errors/catchErrorTyped";
import { SelectMetadataProvider } from "../context/selectMetadata/selectMetadataProvider";

interface SelectMetadataProps {
  className?: string;
}

export const SelectMetadata = ({ className }: SelectMetadataProps) => {
  const {
    goals: {
      selectedGoalId,
      errorResultArray: [goalsError, goals],
    },
    resetGoals,
    setGoalId,
    setGoalErrorResultArray,
    setGoals,
  } = useGoals();

  const {
    technologies: {
      selectedTechnologyId,
      errorResultArray: [technologiesError, technologies],
    },
    resetTechnologies,
    setTechnologyId,
    setTechnologyResultArray,
    setTechnologies,
  } = useTechnologies();
  const {
    topics: {
      selectedTopicId,
      errorResultArray: [topicsError, topics],
    },
    resetTopics,
    setTopicId,
    setTopicResultArray,
    setTopics,
  } = useTopics();
  const {
    tags: {
      selectedTagId,
      errorResultArray: [tagsError, tags],
    },
    resetTags,
    setTagId,
    setTagErrorResultArray,
    setTags,
  } = useTags();

  useEffect(() => {
    const fetchGoals = async () => {
      const [error, result] = await catchErrorTyped(getAllGoals());
      setGoalErrorResultArray([error, result]);
    };

    if (goals?.length == 0 || !goals) fetchGoals();
  }, []);

  useEffect(() => {
    const fetchTechnologies = async () => {
      const [error, result] = await catchErrorTyped(
        getTechnologiesByGoalId(selectedGoalId)
      );
      setTechnologies({
        selectedTechnologyId: null,
        errorResultArray: [error, result],
      });
    };
    if (!selectedGoalId) resetTechnologies();
    else if (selectedGoalId) fetchTechnologies();
  }, [selectedGoalId]);

  useEffect(() => {
    const fetchTopics = async () => {
      const [error, result] = await catchErrorTyped(
        getTopicsByTechnologyId(selectedTechnologyId)
      );
      setTopics({ selectedTopicId: null, errorResultArray: [error, result] });
    };

    if (selectedGoalId && selectedTechnologyId) fetchTopics();
    else resetTopics();
  }, [selectedGoalId, selectedTechnologyId]);
  useEffect(() => {
    const fetchTags = async () => {
      const [error, result] = await catchErrorTyped(
        getTagsByTopicId(selectedTopicId)
      );
      setTags({ selectedTagId: null, errorResultArray: [error, result] });
    };
    if (selectedGoalId && selectedTechnologyId && selectedTopicId) fetchTags();
    else resetTags();
  }, [selectedGoalId, selectedTechnologyId, selectedTopicId]);

  return (
    <div className={className}>
      <select
        onChange={(e) => setGoalId(e.target.value)}
        value={selectedGoalId || ""}
      >
        <option value="">Select a goal</option>
        {goals?.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.title}
          </option>
        ))}
      </select>

      {selectedGoalId && (
        <select
          onChange={(e) => setTechnologyId(e.target.value)}
          value={selectedTechnologyId || ""}
        >
          <option value="">Select a technology</option>
          {technologies?.map((tech) => (
            <option key={tech.id} value={tech.id}>
              {tech.title}
            </option>
          ))}
        </select>
      )}

      {selectedTechnologyId && (
        <select
          onChange={(e) => setTopicId(e.target.value)}
          value={selectedTopicId || ""}
        >
          <option value="">Select a topic</option>
          {topics?.map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.title}
            </option>
          ))}
        </select>
      )}

      {selectedTopicId && (
        <select
          value={selectedTagId || ""}
          onChange={(e) => setTagId(e.target.value)}
        >
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

export function SelectMetadataWrapper({ className }: { className?: string }) {
  return (
    <SelectMetadataProvider>
      <SelectMetadata className={className} />
    </SelectMetadataProvider>
  );
}
