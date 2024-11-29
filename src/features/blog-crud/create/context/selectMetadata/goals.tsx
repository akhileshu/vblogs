import { CatchErrorTypedReturn } from "@/types/resolvedPromise";
import { createContext, ReactNode, useContext, useState } from "react";
import { getAllGoals } from "../../actions/getCategory";

type Goals = {
  selectedGoalId: string | null;
  errorResultArray: CatchErrorTypedReturn<typeof getAllGoals>;
};

type GoalsContextType = {
  goals: Goals;
  setGoalId: (goalId: string | null) => void;
  setGoalErrorResultArray: (
    errorResult: CatchErrorTypedReturn<typeof getAllGoals>
  ) => void;
  resetGoals: () => void;
  setGoals: (goals: Goals) => void;
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
  const [goals, setGoals] = useState<Goals>({
    selectedGoalId: null,
    errorResultArray: [undefined, undefined],
  });

  // Function to update the selected goal ID
  const setGoalId = (goalId: string | null) => {
    setGoals((prev) => ({ ...prev, selectedGoalId: goalId }));
  };

  // Function to update the error/result array for goals
  const setGoalErrorResultArray = (
    errorResult: CatchErrorTypedReturn<typeof getAllGoals>
  ) => {
    setGoals((prev) => ({ ...prev, errorResultArray: errorResult }));
  };

  // Function to reset the goals state
  const resetGoals = () => {
    setGoals({
      selectedGoalId: null,
      errorResultArray: [undefined, undefined],
    });
  };

  return (
    <GoalsContext.Provider
      value={{
        goals,
        setGoalId,
        setGoalErrorResultArray,
        resetGoals,
        setGoals,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
