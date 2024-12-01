import {
  ReactNode,
  useReducer
} from "react";
import { createGenericContext, defaultState, genericReducer } from "./genericContext";
import { getTechnologiesByGoalId } from "../../actions/getCategory";


export const {
  Context: TechnologyContext,
  useGenericContext: useTechnology,
} = createGenericContext<Awaited<ReturnType<typeof getTechnologiesByGoalId>>>();

export const TechnologyProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    genericReducer<Awaited<ReturnType<typeof getTechnologiesByGoalId>>>,
    defaultState
  );

  return (
    <TechnologyContext.Provider value={{ state, dispatch }}>
      {children}
    </TechnologyContext.Provider>
  );
};
