import React, { ReactNode, useState } from "react";
import { useFetchData } from "@/hooks/useFetch";
import { FaRegCircleXmark } from "react-icons/fa6";
import {
  getFilteredArray,
  SelectionSearchInput,
} from "./concept-select/common";
import { OnSelectedTagsModify } from "@/app/(Site)/blog/create/fill-metadata/page";
import { cn } from "@/lib/utils";

interface ReusableSelectorProps<T> {
  fetchData: () => Promise<T[]>;
  selectedId: string | null;
  onSelectedIdChange: (value: string | null) => void;
  placeholder: string;
  getOptionKey: (item: T) => string;
  getOptionLabel: (item: T) => string;
  fetchDataDependencies: string[];
}

export const SelectorDropdown = <T extends { title: string; id: string }>({
  fetchData,
  selectedId,
  onSelectedIdChange,
  placeholder,
  getOptionKey,
  getOptionLabel,
  fetchDataDependencies,
}: ReusableSelectorProps<T>) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error, isLoading } = useFetchData(
    fetchData,
    fetchDataDependencies
  );

  return (
    <LoadingAndError className="w-[400px] p-2 border-[1px] rounded-sm" isLoading={isLoading} error={error}>
      <SelectionSearchInput
        placeholder={placeholder}
        value={searchQuery}
        onchange={(value: string) => setSearchQuery(value)}
      />
      {selectedId ? (
        <p className="bg-indigo-200 p-2 flex-center w-fit rounded-sm gap-2 text-sm">
          {data?.find((item) => item.id === selectedId)?.title}{" "}
          <FaRegCircleXmark onClick={() => onSelectedIdChange(null)} />
        </p>
      ) : null}

      <ul className="h-40 overflow-y-auto text-gray-500 divide-y-[1px]">
        {getFilteredArray(data, searchQuery,undefined, selectedId)?.map((item) => (
          <li className="hover:bg-gray-100 p-1 cursor-pointer"
            onClick={() => {
              onSelectedIdChange(getOptionKey(item));
              setSearchQuery("");
            }}
            key={getOptionKey(item)}
            value={getOptionKey(item)}
          >
            {getOptionLabel(item)}
          </li>
        ))}
      </ul>
    </LoadingAndError>
  );
};
interface MultiSelectDropdownProps<T> {
  fetchData: () => Promise<T[]>;
  selectedIds: string[];
  onSelectedTagsModify: OnSelectedTagsModify;
  placeholder: string;
  getOptionKey: (item: T) => string;
  getOptionLabel: (item: T) => string;
  fetchDataDependencies: string[];
}

export const MultiSelectDropdown = <T extends { title: string; id: string }>({
  fetchData,
  selectedIds,
  onSelectedTagsModify,
  placeholder,
  getOptionKey,
  getOptionLabel,
  fetchDataDependencies,
}: MultiSelectDropdownProps<T>) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error, isLoading } = useFetchData(
    fetchData,
    fetchDataDependencies
  );
  const dataMap = new Map(data?.map((item) => [item.id, item.title]));

  return (
    <LoadingAndError
      className="w-[400px] p-2 border-[1px] rounded-sm"
      isLoading={isLoading}
      error={error}
    >
      <SelectionSearchInput
        placeholder={placeholder}
        value={searchQuery}
        onchange={(value: string) => setSearchQuery(value)}
      />
      <div className="flex gap-1 flex-wrap">
        {selectedIds.map((selectedId) => {
          return (
            <div
              className="bg-indigo-200 p-2 flex-center w-fit rounded-sm gap-2 text-sm "
              key={selectedId}
            >
              {dataMap.get(selectedId)}
              <FaRegCircleXmark
                onClick={() => onSelectedTagsModify(selectedId, "remove")}
              />
            </div>
          );
        })}
      </div>
      <p className="text-sm text-blue-500">can select max 3 tags</p>

      <ul className="h-40 overflow-y-auto text-gray-500 divide-y-[1px]">
        {getFilteredArray(data, searchQuery, selectedIds)?.map((item) => (
          <li
            className="hover:bg-gray-100 p-1 cursor-pointer"
            onClick={() => {
              onSelectedTagsModify(getOptionKey(item), "add");
              setSearchQuery("");
            }}
            key={getOptionKey(item)}
            value={getOptionKey(item)}
          >
            {getOptionLabel(item)}
          </li>
        ))}
      </ul>
    </LoadingAndError>
  );
};

const LoadingAndError = ({
  isLoading,
  error,
  children,
  className
}: {
  isLoading: boolean;
  error: string | null;
  children: ReactNode;
  className?: string;
}) => {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return <div className={cn(className)}>{children}</div>;
};
