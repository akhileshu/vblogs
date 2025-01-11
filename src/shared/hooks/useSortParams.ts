// hooks/useSortParams.ts
import { useState } from "react";
import { SortKey } from "../lib/blog-sort";

export const useBlogSortParams = () => {
  const [selectedSortKey, setSelectedSortKey] = useState<SortKey>("relevance");

  const getSortParams = (sortKey?: SortKey): URLSearchParams => {
    const params = new URLSearchParams();
    const keyToUse = sortKey ?? selectedSortKey;
    if (keyToUse !== "relevance") params.set("sortKey", keyToUse);

    return params;
  };

  return { selectedSortKey, setSelectedSortKey, getSortParams };
};
