import { ReactNode, useReducer } from "react";
import { createGenericContext, defaultState, genericReducer } from "./genericContext";
import { getTagsByTopicId } from "../../actions/getCategory";

export const { Context: TagContext, useGenericContext: useTag } =
  createGenericContext<Awaited<ReturnType<typeof getTagsByTopicId>>>();

export const TagProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    genericReducer<Awaited<ReturnType<typeof getTagsByTopicId>>>,
    defaultState
  );

  return (
    <TagContext.Provider value={{ state, dispatch }}>
      {children}
    </TagContext.Provider>
  );
};
