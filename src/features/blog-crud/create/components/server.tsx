import {
  getAllGoals,
  getTechnologiesByGoalId,
  getTopicsByTechnologyId,
} from "../actions/getCategory";
import { GoalSelector, TechSelector, TopicSelector } from "./client";
import { catchErrorTyped } from "@/lib/errors/catchErrorTyped";
// app/select-metadata/server/goals.tsx
import { Suspense, use } from "react";

export function GoalsServer({
  selectedGoalId,
}: {
  selectedGoalId?: string | string[] | undefined;
}) {
  const goalsErrorResultArray = use(catchErrorTyped(getAllGoals()));
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <GoalSelector
        selectedGoalId={selectedGoalId}
        goalsErrorResultArray={goalsErrorResultArray}
      />
    </Suspense>
  );
}

export function TechnologiesServer({
  selectedGoalId,
  selectedTechId,
}: {
  selectedGoalId: string;
  selectedTechId?: string | string[] | undefined;
}) {
  const technologiesErrorResultArray = use(
    catchErrorTyped(getTechnologiesByGoalId(selectedGoalId))
  );
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {" "}
      <TechSelector
        selectedTechId={selectedTechId}
        technologiesErrorResultArray={technologiesErrorResultArray}
      />{" "}
    </Suspense>
  );
}

export function TopicsServer({
  selectedTechId,
  selectedTopicId,
}: {
  selectedTechId: string;
  selectedTopicId?: string | string[] | undefined;
}) {
  const topicsErrorResultArray = use(
    catchErrorTyped(getTopicsByTechnologyId(selectedTechId))
  );
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {" "}
      <TopicSelector
        selectedTopicId={selectedTopicId}
        topicsErrorResultArray={topicsErrorResultArray}
      />{" "}
    </Suspense>
  );
}
