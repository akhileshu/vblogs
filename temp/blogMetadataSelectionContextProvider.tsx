import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";

interface SelectionContextType {
  selectedGoal: string | null;
  selectedTechnology: string | null;
  selectedTopic: string | null;
  selectedTag: string | null;
  setSelectedGoal: (goalId: string | null) => void;
  setSelectedTechnology: (techId: string | null) => void;
  setSelectedTopic: (topicId: string | null) => void;
  setSelectedTag: (tagId: string | null) => void;
}

const SelectionContext = createContext<SelectionContextType | undefined>(
  undefined
);

export const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection must be used within a SelectionProvider");
  }
  return context;
};

export const SelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(
    null
  );
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      selectedGoal,
      selectedTechnology,
      selectedTopic,
      selectedTag,
      setSelectedGoal,
      setSelectedTechnology,
      setSelectedTopic,
      setSelectedTag,
    }),
    [selectedGoal, selectedTechnology, selectedTopic, selectedTag]
  );

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
};
