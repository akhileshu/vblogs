import { ReactNode, use, useReducer } from "react";
import {
  createGenericContext,
  defaultState,
  genericReducer,
} from "./genericContext";
import { getAllGoals } from "../../actions/getCategory";
import { catchErrorTyped } from "@/shared/lib/errors/catchErrorTyped";

export const { Context: GoalContext, useGenericContext: useGoal } =
  createGenericContext<Awaited<ReturnType<typeof getAllGoals>>>();

export const GoalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    genericReducer<Awaited<ReturnType<typeof getAllGoals>>>,
    defaultState
    // { ...defaultState, errorResultArray: use(catchErrorTyped(getAllGoals())) }
  );

  return (
    <GoalContext.Provider value={{ state, dispatch }}>
      {children}
    </GoalContext.Provider>
  );
};
