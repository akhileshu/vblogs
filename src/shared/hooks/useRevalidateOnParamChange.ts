import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { revalidateTagUtil } from "../utils/revalidateTagUtils";

export function useRevalidateOnParamChange(tag?: string) {
  const isFirstRender = useRef(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!tag) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    revalidateTagUtil(tag);
  }, [searchParams, tag]);
}
