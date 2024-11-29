import { catchErrorTyped } from "@/lib/errors/catchErrorTyped";
import { useCallback, useEffect, useState } from "react";

export function useFetch<T>(
  callbackFunction: () => Promise<T>,
  dependencies: unknown[] = [],
  shouldFetch: boolean = true
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const stableCallback = useCallback(callbackFunction, dependencies);
  console.log("fetch dependencies", [
    callbackFunction,
    shouldFetch,
    ...dependencies,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      debugger;
      setLoading(true);
      const [error, result] = await catchErrorTyped(callbackFunction());
      if (error) setError(error);
      else setData(result);
      setLoading(false);
    };

    if (shouldFetch) fetchData();
    // Include dependencies and `shouldFetch` in the dependency array
  }, [stableCallback, shouldFetch]);

  return { data, error, loading };
}
