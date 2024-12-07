// app/blog/create/fill-metadata/client/GoalSelector.tsx
"use client";
import { CatchErrorTypedResult } from "@/types/resolvedPromise";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { getAllGoals } from "../actions/getCategory";
import { Suspense } from "react";

function updateSearchParam(
  query: string,
  value: string,
  router: AppRouterInstance,
  queriesToDelete: string[] = []
) {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(query, value);
  queriesToDelete.forEach((q) => searchParams.delete(q));
  router.push(`/blog/create/fill-metadata?${searchParams.toString()}`);
}

interface GoalSelectorProps {
  goalsErrorResultArray: CatchErrorTypedResult<
    Awaited<ReturnType<typeof getAllGoals>>
  >;
  selectedGoalId?: string | string[] | undefined;
}

export const GoalSelector = ({
  goalsErrorResultArray,
  selectedGoalId,
}: GoalSelectorProps) => {
  const [goalsError, goals] = goalsErrorResultArray;
  const router = useRouter();

  return (
    <select
      onChange={(e) =>
        updateSearchParam("goalId", e.target.value, router, [
          "techId",
          "topicId",
          "tagId",
        ])
      }
      value={selectedGoalId || ""}
    >
      <option value="">Select Goal</option>
      {goals?.map((goal) => (
        <option key={goal.id} value={goal.id}>
          {goal.title}
        </option>
      ))}
    </select>
  );
};

// app/blog/create/fill-metadata/client/TechSelector.tsx

interface TechSelectorProps {
  technologiesErrorResultArray:
    | CatchErrorTypedResult<Awaited<ReturnType<typeof getAllGoals>>>
    | [];
  selectedTechId?: string | string[] | undefined;
}

export const TechSelector = ({
  technologiesErrorResultArray,
  selectedTechId,
}: TechSelectorProps) => {
  const [technologiesError, technologies] = technologiesErrorResultArray ?? [];
  const router = useRouter();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <select
        onChange={(e) =>
          updateSearchParam("techId", e.target.value, router, [
            "topicId",
            "tagId",
          ])
        }
        value={selectedTechId || ""}
      >
        <option value="">Select Technology</option>
        {technologies?.map((tech) => (
          <option key={tech.id} value={tech.id}>
            {tech.title}
          </option>
        ))}
      </select>
    </Suspense>
  );
};

// app/blog/create/fill-metadata/client/TopicSelector.tsx

interface TopicSelectorProps {
  topicsErrorResultArray:
    | CatchErrorTypedResult<Awaited<ReturnType<typeof getAllGoals>>>
    | [];
  selectedTopicId?: string | string[] | undefined;
}

export const TopicSelector = ({
  topicsErrorResultArray,
  selectedTopicId,
}: TopicSelectorProps) => {
  const [topicsError, topics] = topicsErrorResultArray ?? [];
  const router = useRouter();

  return (
    <select
      onChange={(e) =>
        updateSearchParam("topicId", e.target.value, router, ["tagId"])
      }
      value={selectedTopicId || ""}
    >
      <option value="">Select Topic</option>
      {topics?.map((topic) => (
        <option key={topic.id} value={topic.id}>
          {topic.title}
        </option>
      ))}
    </select>
  );
};
