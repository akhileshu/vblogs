import { useState, useEffect } from "react";
export const useDebouncedState = <T,>(state: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(state);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(state);
    }, delay);

    return () => clearTimeout(handler);
  }, [state, delay]);

  return debouncedValue;
};
