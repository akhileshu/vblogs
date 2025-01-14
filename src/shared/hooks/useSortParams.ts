// hooks/useSortParams.ts
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SortKey } from "../lib/blog-sort";

export const useBlogSortParams = () => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const selectedSortKey: SortKey =
    (params.get("sortKey") as SortKey) ?? "relevance";
  const setSelectedSortKey = (sortKey: SortKey) => {
    router.replace(`${pathname}?${getSortParams(sortKey).toString()}`);
  };

  const getSortParams = (
    sortKey?: SortKey,
    clearOtherParam?: boolean
  ): URLSearchParams => {
    const currentParams = new URLSearchParams(
      clearOtherParam ? undefined : window.location.search
    );
    const keyToUse = sortKey ?? selectedSortKey;
    if (keyToUse === "relevance") {
      currentParams.delete("sortKey");
    } else {
      currentParams.set("sortKey", keyToUse);
    }

    return currentParams;
  };

  return { selectedSortKey, setSelectedSortKey, getSortParams };
};
