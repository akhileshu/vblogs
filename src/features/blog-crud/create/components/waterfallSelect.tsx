"use client";
import { catchErrorTyped } from "@/lib/errors/catchErrorTyped";
import { cn } from "@/lib/utils";
import { areAllTruthy } from "@/utils/allAreTruthy";
import { useEffect, useState } from "react";
import {
  getAllGoals,
  getTagsByTopicId,
  getTechnologiesByGoalId,
  getTopicsByTechnologyId,
} from "../actions/getCategory";
import { useGoal } from "../context/selectMetadata/goals";
import { useTag } from "../context/selectMetadata/tags";
import { useTechnology } from "../context/selectMetadata/technologies";
import { useTopic } from "../context/selectMetadata/topics";
import { SearchFromList } from "./searchFromList";

interface SelectMetadataProps {
  className?: string;
}

export const SelectMetadata = ({ className }: SelectMetadataProps) => {
  const [title, setTitle] = useState<string>("");
  const [SelectedTags, setSelectedTags] = useState<
    {
      id: string;
      title: string;
    }[]
  >([]);

  const {
    state: {
      errorResultArray: goalErrorResultArray,
      selectedId: selectedGoalId,
      isLoading: goalIsLoading,
    },
    dispatch: goalDispatch,
  } = useGoal();
  const [goalError, goals] = goalErrorResultArray ?? [];

  const {
    state: {
      errorResultArray: tagErrorResultArray,
      selectedId: selectedTagId,
      isLoading: tagIsLoading,
    },
    dispatch: tagDispatch,
  } = useTag();
  const [tagError, tags] = tagErrorResultArray ?? [];

  const {
    state: {
      errorResultArray: technologyErrorResultArray,
      selectedId: selectedTechnologyId,
      isLoading: technologyIsLoading,
    },
    dispatch: technologyDispatch,
  } = useTechnology();
  const [technologyError, technologies] = technologyErrorResultArray ?? [];

  const {
    state: {
      errorResultArray: topicErrorResultArray,
      selectedId: selectedTopicId,
      isLoading: topicIsLoading,
    },
    dispatch: topicDispatch,
  } = useTopic();
  const [topicError, topics] = topicErrorResultArray ?? [];

  useEffect(() => {
    const fetch = async () => {
      goalDispatch({ type: "SET_IS_LOADING", payload: true });
      const op = await catchErrorTyped(getAllGoals());
      goalDispatch({ type: "SET_ERROR_RESULT_AND_STOP_LOADING", payload: op });
      goalDispatch({ type: "SET_SELECTED_ID", payload: null });
    };
    fetch();
  }, [goalDispatch]);

  useEffect(() => {
    const fetch = async () => {
      technologyDispatch({ type: "SET_IS_LOADING", payload: true });
      technologyDispatch({
        type: "SET_ERROR_RESULT_AND_STOP_LOADING",
        payload: await catchErrorTyped(
          getTechnologiesByGoalId(selectedGoalId ?? "")
        ),
      });
      technologyDispatch({ type: "SET_SELECTED_ID", payload: null });
    };
    if (areAllTruthy([selectedGoalId])) fetch();
    else technologyDispatch({ type: "RESET" }); // on render | goal removed
  }, [selectedGoalId, technologyDispatch]);

  useEffect(() => {
    const fetch = async () => {
      topicDispatch({ type: "SET_IS_LOADING", payload: true });
      const op = await catchErrorTyped(
        getTopicsByTechnologyId(selectedTechnologyId ?? "")
      );
      topicDispatch({ type: "SET_ERROR_RESULT_AND_STOP_LOADING", payload: op });
      topicDispatch({ type: "SET_SELECTED_ID", payload: null });
    };
    if (areAllTruthy([selectedGoalId, selectedTechnologyId])) fetch();
    else topicDispatch({ type: "RESET" }); // on render | either of these removed
  }, [selectedGoalId, selectedTechnologyId, topicDispatch]);

  useEffect(() => {
    const fetch = async () => {
      tagDispatch({ type: "SET_IS_LOADING", payload: true });
      const op = await catchErrorTyped(getTagsByTopicId(selectedTopicId ?? ""));
      tagDispatch({ type: "SET_ERROR_RESULT_AND_STOP_LOADING", payload: op });
      tagDispatch({ type: "SET_SELECTED_ID", payload: null });
    };
    if (areAllTruthy([selectedGoalId, selectedTechnologyId, selectedTopicId]))
      fetch();
    else tagDispatch({ type: "RESET" }); // on render | one of these removed
  }, [selectedGoalId, selectedTechnologyId, selectedTopicId, tagDispatch]);

  function setSelectedGoalId(value: string | null) {
    goalDispatch({
      type: "SET_SELECTED_ID",
      payload: value || null,
    });
  }
  function setSelectedTechnologyId(value: string | null) {
    technologyDispatch({
      type: "SET_SELECTED_ID",
      payload: value || null,
    });
  }
  function setSelectedTopicId(value: string | null) {
    topicDispatch({
      type: "SET_SELECTED_ID",
      payload: value || null,
    });
  }
  function setSelectedTagId(value: string | null) {
    tagDispatch({
      type: "SET_SELECTED_ID",
      payload: value || null,
    });
  }

  return (
    <div className={cn(className, "space-y-4 divide-y-2")}>
      <SearchFromList
        errorMsg={goalError?.message}
        isLoading={goalIsLoading}
        items={goals}
        onSelect={(id: string) => {
          setSelectedTechnologyId(null);
          setSelectedGoalId(id);
        }}
        placeholder="select a goal"
        selectedItemId={selectedGoalId}
        key={"goals"}
      />
      <SearchFromList
        errorMsg={technologyError?.message}
        isLoading={technologyIsLoading}
        items={technologies}
        onSelect={(id: string) => {
          setSelectedTopicId(null);
          setSelectedTechnologyId(id);
        }}
        placeholder="select a technology"
        selectedItemId={selectedTechnologyId}
        key={"technologies"}
        toRender={typeof selectedGoalId === "string"}
      />
      <SearchFromList
        errorMsg={topicError?.message}
        isLoading={topicIsLoading}
        items={topics}
        onSelect={(id: string) => {
          setSelectedTagId(null);
          setSelectedTopicId(id);
        }}
        placeholder="select a topic"
        selectedItemId={selectedTopicId}
        key={"topics"}
        toRender={typeof selectedTechnologyId === "string"}
      />
      <SearchFromList
        errorMsg={tagError?.message}
        isLoading={tagIsLoading}
        items={tags}
        onSelect={(id: string) => {
          setSelectedTagId(id);
        }}
        placeholder="select tags (max 3)"
        selectedItemId={selectedTagId}
        key={"tags"}
        onTagsModify={(id: string, title: string, type: "ADD" | "REMOVE") => {
          setSelectedTags(
            type === "ADD"
              ? [...SelectedTags, { id, title }]
              : SelectedTags.filter((t) => t.id !== id)
          );
        }}
        tags={SelectedTags}
        toRender={typeof selectedTopicId === "string"}
      />

      {SelectedTags.length ? (
        <div>
          <label htmlFor="title">title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            name="title"
            required
          />

          <button onClick={() => console.log({ selectedTopicId, title , SelectedTags })}>
            log
          </button>
          {/* save in db - navigate to write blog page */}
        </div>
      ):null}
    </div>
  );
};
