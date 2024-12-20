import { OnSelectedTagsModify } from "@/app/(Site)/blog/create/fill-metadata/page";
import { useDebouncedState } from "@/shared/hooks/useDebouncedState";
import { useFetchData } from "@/shared/hooks/useFetch";
import { cn } from "@/lib/utils";
import { ReactNode, useMemo, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { getFilteredArrayForMetadataSelector } from "../../libs/getFilteredArrayForMetadataSelector";
import AppInput, { AppCard } from "@/shared/components/app/standard-components";

// General reusable type
type BaseSelectorProps<T> = {
  fetchData: () => Promise<T[]>;
  KeyText: string;
  fetchDataDependencies: string[];
  getOptionKey: (item: T) => string;
  getOptionLabel: (item: T) => string;
} & (SingleSelectProps | MultiSelectProps);

type SingleSelectProps = {
  selectType: "singleSelect";
  selectedId: string | null;
  onSelectedIdChange: (value: string | null) => void;
};

type MultiSelectProps = {
  selectType: "multiSelect";
  selectedIds: string[];
  onSelectedTagsModify: OnSelectedTagsModify;
};

export const SelectorDropdown = <T extends { title: string; id: string }>(
  props: BaseSelectorProps<T>
) => {
  const {
    fetchData,
    selectType,
    KeyText,
    getOptionKey,
    getOptionLabel,
    fetchDataDependencies,
  } = props;

  const isSingleSelect = selectType === "singleSelect";
  const isMultiSelect = selectType === "multiSelect";

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebouncedState(searchQuery, 500);

  const { data, error, isLoading } = useFetchData(
    fetchData,
    fetchDataDependencies
  );

  const selectedIds = isMultiSelect ? props.selectedIds : undefined;
  const selectedId = isSingleSelect ? props.selectedId : undefined;

  const filteredData = useMemo(() => {
    return getFilteredArrayForMetadataSelector(
      data,
      debouncedQuery,
      selectedIds,
      selectedId
    );
  }, [data, debouncedQuery, selectedId, selectedIds]);
  const dataMap = isMultiSelect
    ? new Map(data?.map((item) => [item.id, item.title]))
    : undefined;

  return (
    <AppCard title={`Select ${KeyText}`} widthVariant="medium">
      <LoadingAndError isLoading={isLoading} error={error}>
        <AppInput
          widthVariant="full"
          type="text"
          placeholder={`Search ${KeyText}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {isSingleSelect && props.selectedId ? (
          <p className="bg-indigo-200 p-2 flex-center w-fit rounded-sm gap-2 text-sm">
            {data?.find((item) => item.id === props.selectedId)?.title}{" "}
            <FaRegCircleXmark onClick={() => props.onSelectedIdChange(null)} />
          </p>
        ) : isMultiSelect ? (
          <>
            <div className="flex gap-1 flex-wrap">
              {props.selectedIds?.map((selectedId) => {
                return (
                  <div
                    className="bg-indigo-200 p-2 flex-center w-fit rounded-sm gap-2 text-sm "
                    key={selectedId}
                  >
                    {dataMap?.get(selectedId)}
                    <FaRegCircleXmark
                      onClick={() =>
                        props.onSelectedTagsModify(selectedId, "remove")
                      }
                    />
                  </div>
                );
              })}
            </div>
            <p className="text-sm text-blue-500">can select max 3 tags</p>
          </>
        ) : null}
        <ul className="h-40 overflow-y-auto text-gray-500 divide-y-[1px]">
          {filteredData?.map((item) => (
            <li
              className="hover:bg-gray-100 p-1 cursor-pointer"
              onClick={() => {
                if (isSingleSelect)
                  props.onSelectedIdChange(getOptionKey(item));
                else if (isMultiSelect)
                  props.onSelectedTagsModify(getOptionKey(item), "add");
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
    </AppCard>
  );
};

const LoadingAndError = ({
  isLoading,
  error,
  children,
  className,
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
