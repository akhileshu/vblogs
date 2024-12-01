import { ReactNode, useReducer } from "react";
import { createGenericContext, defaultState, genericReducer } from "./genericContext";
import { getAllGoals } from "../../actions/getCategory";

export const { Context: GoalContext, useGenericContext: useGoal } =
  createGenericContext<Awaited<ReturnType<typeof getAllGoals>>>();

export const GoalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    genericReducer<Awaited<ReturnType<typeof getAllGoals>>>,
    defaultState
  );

  return (
    <GoalContext.Provider value={{ state, dispatch }}>
      {children}
    </GoalContext.Provider>
  );
};
