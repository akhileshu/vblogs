import {
  fetchSearchBlogConcepts,
  HierarchialDropdowns,
  useDropdownContext,
} from "@/features/hierarchical-dropdowns";
import { SelectSortOption } from "@/features/render-sort-options";
import { cn } from "@/lib/utils";
import { getUrl } from "@/shared/lib/get-url";
import isHotkey from "is-hotkey";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useBlogSortParams } from "../hooks/useSortParams";
import { groupSortOptions, singleSortOptions } from "../lib/blog-sort";
import { appToast } from "../lib/toast";

const SearchBlogs = () => {
  const [query, setQuery] = useState("");
  const { selectedOptions } = useDropdownContext();
  const { getSortParams, selectedSortKey, setSelectedSortKey } =
    useBlogSortParams();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [hideDropdown, setHideDropdown] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isHotkey("ctrl+k", event)) {
        event.preventDefault();
        inputRef.current?.focus();
      } else if (isHotkey("esc", event)) {
        inputRef.current?.blur();
        setHideDropdown(true);
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.length < 2) {
      appToast.error("please search blogs with atleast 2 characters");
      inputRef.current?.focus();
      return;
    }
    const params = getSortParams(undefined,true);
    if (query) params.set("query", query);
    const topicIdsCsv = selectedOptions[2]
      ?.map((option) => option.id)
      .join(",");
    if (topicIdsCsv) {
      params.set(
        "topicIdsCsv",
        selectedOptions[2]?.map((option) => option.id).join(",")
      );
    }
    router.push(getUrl("blogSearchResults", undefined, params));
    inputRef.current?.blur();
    setHideDropdown(true);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative group  w-96 border  rounded-sm text-sm"
    >
      <div className="flex-center">
        <input
          ref={inputRef}
          onFocus={() => setHideDropdown(false)}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          placeholder="Search..."
          className="w-full p-1  rounded outline-none"
        />
        <div className="text-xs flex-center group-focus-within:invisible">
          <kbd className=" bg-gray-100 border px-1 rounded">Ctrl</kbd>
          <span>+</span>
          <kbd className=" bg-gray-100 border px-1 rounded">K</kbd>
        </div>
        <button
          disabled={query.length < 2}
          className="border-l ml-2 disabled:cursor-not-allowed"
          type="submit"
        >
          <FaSearch className=" size-8 p-2" />
        </button>
      </div>
      <div
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") handleSearch(e);
        }}
        tabIndex={-1}
        className={cn(
          "absolute left-0 space-y-2  p-1 border bg-white border-indigo-500 rounded w-[80vw] mt-1 invisible group-focus-within:visible",
          {
            "opacity-0": hideDropdown,
          }
        )}
      >
        {query ? (
          <Suggestions className="m-0" query={query} />
        ) : (
          <History className="m-0" />
        )}

        <div className="flex gap-1">
          <HierarchialDropdowns
            className="flex-1 m-0"
            fetchOptionsForLevel={fetchSearchBlogConcepts}
          />
          <SelectSortOption
            className="m-0"
            defaultSortKey="relevance"
            setSelectedSortKey={setSelectedSortKey}
            selectedSortKey={selectedSortKey}
            singleSortOptions={singleSortOptions}
            groupSortOptions={groupSortOptions}
          />
        </div>
        <div className="border p-1 rounded-sm text-xs">
          <p className="font-semibold">Shortcut Guide:</p>
          <ul className="mt-2 list-none flex gap-2 divide-x-[1px]">
            <li>
              <kbd className=" bg-gray-200 p-1 rounded">Enter</kbd> to search
            </li>
            <li>
              <kbd className="ml-2 bg-gray-200 p-1 rounded">Esc</kbd> to clear
            </li>
            <li>
              <kbd className="ml-2 bg-gray-200 p-1 rounded">↑</kbd>{" "}
              <kbd className="ml-2 bg-gray-200 p-1 rounded">↓</kbd> to navigate
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
};

const Suggestions = ({
  query,
  className,
}: {
  query: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "p-2 border rounded-sm m-2",
        {
          hidden: query.length === 0,
        },
        className
      )}
    >
      <h3 className="font-bold text-base">suggestions</h3>
      <ul>
        <li>suggestion 1</li>
        <li>suggestion 2</li>
        <li>suggestion 3</li>
        <li>suggestion 4</li>
      </ul>
    </div>
  );
};
const History = ({ className }: { className?: string }) => {
  return (
    <div className={cn("p-2 border rounded-sm m-2", className)}>
      <h3 className="font-bold text-base">History</h3>
      <ul>
        <li>History 1</li>
        <li>History 2</li>
        <li>History 3</li>
        <li>History 4</li>
      </ul>
    </div>
  );
};

export default SearchBlogs;
