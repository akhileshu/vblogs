import { ReactNode, useReducer } from "react";
import { createGenericContext, defaultState, genericReducer } from "./genericContext";
import { getTopicsByTechnologyId } from "../../actions/getCategory";

export const { Context: TopicContext, useGenericContext: useTopic } =
  createGenericContext<Awaited<ReturnType<typeof getTopicsByTechnologyId>>>();

export const TopicProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    genericReducer<Awaited<ReturnType<typeof getTopicsByTechnologyId>>>,
    defaultState
  );

  return (
    <TopicContext.Provider value={{ state, dispatch }}>
      {children}
    </TopicContext.Provider>
  );
};
