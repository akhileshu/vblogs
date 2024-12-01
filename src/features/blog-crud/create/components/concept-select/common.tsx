"use client";
import { SelectMetadataProvider } from "../../context/selectMetadata/selectMetadataProvider";
import { SelectMetadata } from "../waterfallSelect";

export function SelectMetadataWrapper({ className }: { className?: string }) {
  return (
    <SelectMetadataProvider>
      <SelectMetadata className={className} />
    </SelectMetadataProvider>
  );
}

export function getFilteredArray<T extends { title: string; id: string }>(
  array: T[] | undefined,
  searchQuery: string,
  tags?: {
    id: string;
    title: string;
  }[]
) {
  const filterOutSelectedTags = (itemId: string) => {
    return !tags || !tags.some((tag) => tag.id === itemId);
  };
  return array?.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      filterOutSelectedTags(item.id)
  );
}

export function SelectorSearchInput({
  onchange,
  value,
  placeholder,
}: {
  onchange: (value: string) => void;
  value: string;
  placeholder: string;
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onchange(e.target.value)}
      className="border p-1 mb-2 w-72"
    />
  );
}
