import { LoaderWrapper } from "@/components/app/Loader";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { getFilteredArray, SelectorSearchInput } from "./concept-select/common";

interface SearchFromListProps<T> {
  items: T[] | undefined;
  selectedItemId: string | null;
  onSelect: (id: string) => void;
  placeholder: string;
  isLoading: boolean;
  toRender?: boolean;
  errorMsg: string | undefined;
  className?: string;
  tags?: {
    id: string;
    title: string;
  }[];
  onTagsModify?: (id: string, title: string, type: "ADD" | "REMOVE") => void;
}

export function SearchFromList<T extends { title: string; id: string }>({
  className,
  isLoading,
  errorMsg,
  items,
  selectedItemId,
  onSelect,
  placeholder,
  toRender,
  tags,
  onTagsModify,
}: SearchFromListProps<T>) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <LoaderWrapper
      className={cn(className, "max-h-40 scroll-auto")}
      isLoading={isLoading}
      errorMsg={errorMsg}
      toRender={toRender}
    >
      <SelectorSearchInput
        placeholder={placeholder}
        value={searchQuery}
        onchange={(value: string) => setSearchQuery(value)}
      />
      {tags ? (
        tags.map(({ id, title }) => (
          <p
            key={id}
            onClick={() => onTagsModify?.(id, title, "REMOVE")}
            className="bg-green-400 p-1 m-1 rounded-md w-fit"
          >
            {title} {" X"}
          </p>
        ))
      ) : (
        <p className="bg-green-400 p-2">
          {selectedItemId
            ? items?.find((item) => item.id === selectedItemId)?.title
            : ""}
        </p>
      )}
      <ul>
        {getFilteredArray(items, searchQuery, tags)?.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              if (tags) {
                onTagsModify?.(item.id, item.title, "ADD");
              } else onSelect(item.id);
              setSearchQuery("");
            }}
            value={item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </LoaderWrapper>
  );
}
