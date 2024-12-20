import { catchErrorTyped } from "@/shared/lib/errors/catchErrorTyped";
import { useEffect, useState } from "react";

export function useFetchData<T>(
  callbackFunction: () => Promise<T>,
  dependencies: unknown[] = []
) {
  const [data, setData] = useState<T | undefined | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [error, data] = await catchErrorTyped(callbackFunction());
      if (error) {
        setError(error.message);
      } else {
        setData(data);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [...dependencies]);

  return { data, error, isLoading };
}
