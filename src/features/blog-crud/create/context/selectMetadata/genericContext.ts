import { CatchErrorTypedResult } from "@/types/resolvedPromise";
import { createContext, Dispatch, useContext } from "react";

type Action<T> =
  | { type: "SET_SELECTED_ID"; payload: string | null }
  | {
      type: "SET_ERROR_RESULT_AND_STOP_LOADING";
      payload: CatchErrorTypedResult<T>;
    }
  | {
      type: "SET_IS_LOADING";
      payload: boolean;
    }
  | { type: "RESET" };

type State<T> = {
  selectedId: string | null;
  errorResultArray: CatchErrorTypedResult<T> | null;
  isLoading: boolean;
};

export const defaultState = {
  errorResultArray: null,
  isLoading: false,
  selectedId: null,
};

type ContextType<T> = {
  state: State<T>;
  dispatch: Dispatch<Action<T>>;
};

export function createGenericContext<T>() {
  const Context = createContext<ContextType<T> | undefined>(undefined);

  const useGenericContext = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error("useGenericContext must be used within a Provider");
    }
    return context;
  };

  return { Context, useGenericContext };
}

export function genericReducer<T>(
  state: State<T>,
  action: Action<T>
): State<T> {
  switch (action.type) {
    case "SET_SELECTED_ID":
      return { ...state, selectedId: action.payload };
    case "SET_ERROR_RESULT_AND_STOP_LOADING":
      return {
        ...state,
        errorResultArray: action.payload,
        isLoading: false,
      };
    case "RESET":
      return defaultState;
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
