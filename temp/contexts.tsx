import { catchErrorTyped } from "@/lib/errors/catchErrorTyped";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { getAllGoals } from "../src/features/blog-crud/create/actions/getCategory";
import { CatchErrorTypedReturn } from "@/types/resolvedPromise";

type Goals = {
  selectedGoalId: string | null;
  errorResultArray: CatchErrorTypedReturn<typeof getAllGoals>;
};
type GoalsContextType = {
  goals: Goals;
  setSelectedGoal: (goals: Goals) => void;
};

const GoalsContext = createContext<GoalsContextType | undefined>(undefined);

export const useGoals = () => {
  const context = useContext(GoalsContext);
  if (!context) {
    throw new Error("useGoal must be used within a GoalProvider");
  }
  return context;
};

export const GoalsProvider = ({ children }: { children: ReactNode }) => {
  const [goals, setSelectedGoal] = useState<Goals>({
    selectedGoalId: null,
    errorResultArray: [undefined, null],
  });

  return (
    <GoalsContext.Provider value={{ goals, setSelectedGoal }}>
      {children}
    </GoalsContext.Provider>
  );
};

interface TechnologyContextType {
  selectedTechnology: string | null;
  setSelectedTechnology: (techId: string | null) => void;
}

const TechnologyContext = createContext<TechnologyContextType | undefined>(
  undefined
);

export const useTechnology = () => {
  const context = useContext(TechnologyContext);
  if (!context) {
    throw new Error("useTechnology must be used within a TechnologyProvider");
  }
  return context;
};

export const TechnologyProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(
    null
  );

  const value = useMemo(
    () => ({
      selectedTechnology,
      setSelectedTechnology,
    }),
    [selectedTechnology]
  );

  return (
    <TechnologyContext.Provider value={value}>
      {children}
    </TechnologyContext.Provider>
  );
};

interface TopicContextType {
  selectedTopic: string | null;
  setSelectedTopic: (topicId: string | null) => void;
}

const TopicContext = createContext<TopicContextType | undefined>(undefined);

export const useTopic = () => {
  const context = useContext(TopicContext);
  if (!context) {
    throw new Error("useTopic must be used within a TopicProvider");
  }
  return context;
};

export const TopicProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      selectedTopic,
      setSelectedTopic,
    }),
    [selectedTopic]
  );

  return (
    <TopicContext.Provider value={value}>{children}</TopicContext.Provider>
  );
};

interface TagContextType {
  selectedTag: string | null;
  setSelectedTag: (tagId: string | null) => void;
}

const TagContext = createContext<TagContextType | undefined>(undefined);

export const useTag = () => {
  const context = useContext(TagContext);
  if (!context) {
    throw new Error("useTag must be used within a TagProvider");
  }
  return context;
};

export const TagProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      selectedTag,
      setSelectedTag,
    }),
    [selectedTag]
  );

  return <TagContext.Provider value={value}>{children}</TagContext.Provider>;
};

export const SelectionProvider = ({ children }: { children: ReactNode }) => (
  <GoalsProvider>
    <TechnologyProvider>
      <TopicProvider>
        <TagProvider>{children}</TagProvider>
      </TopicProvider>
    </TechnologyProvider>
  </GoalsProvider>
);
