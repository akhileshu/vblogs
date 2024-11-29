import { CatchErrorTypedReturn } from "@/types/resolvedPromise";
import { createContext, ReactNode, useContext, useState } from "react";
import { getTopicsByTechnologyId } from "../../actions/getCategory";

type Topics = {
  selectedTopicId: string | null;
  errorResultArray: CatchErrorTypedReturn<typeof getTopicsByTechnologyId>;
};

type TopicsContextType = {
  topics: Topics;
  setTopicId: (topicId: string | null) => void;
  setTopicResultArray: (
    errorResult: CatchErrorTypedReturn<typeof getTopicsByTechnologyId>
  ) => void;
  resetTopics: () => void;
  setTopics: (topics: Topics) => void;
};

const TopicsContext = createContext<TopicsContextType | undefined>(undefined);

export const useTopics = () => {
  const context = useContext(TopicsContext);
  if (!context) {
    throw new Error("useTopic must be used within a TopicProvider");
  }
  return context;
};

export const TopicsProvider = ({ children }: { children: ReactNode }) => {
  const [topics, setTopics] = useState<Topics>({
    selectedTopicId: null,
    errorResultArray: [undefined, undefined],
  });

  // Function to update the selected topic ID
  const setTopicId = (topicId: string | null) => {
    setTopics((prev) => ({ ...prev, selectedTopicId: topicId }));
  };

  // Function to update the error/result array for topics
  const setTopicResultArray = (
    errorResult: CatchErrorTypedReturn<typeof getTopicsByTechnologyId>
  ) => {
    setTopics((prev) => ({ ...prev, errorResultArray: errorResult }));
  };

  // Function to reset the topics state
  const resetTopics = () => {
    setTopics({
      selectedTopicId: null,
      errorResultArray: [undefined, undefined],
    });
  };

  return (
    <TopicsContext.Provider
      value={{ topics, setTopicId, setTopicResultArray, resetTopics,setTopics }}
    >
      {children}
    </TopicsContext.Provider>
  );
};
