import { cn } from "@/lib/utils";
import { BlogSortOption } from "./types";
import { doNothing } from "@/shared/utils/doNothing";

export const SelectSortOption = <
  SortKey extends string,
  ModelField extends string
>({
  groupSortOptions,
  singleSortOptions,
  setSelectedSortKey,
  selectedSortKey,
  defaultSortKey,
  className,
  onSortChange = doNothing,
}: {
  groupSortOptions: BlogSortOption<SortKey, ModelField>[][];
  singleSortOptions: BlogSortOption<SortKey, ModelField>[];
  setSelectedSortKey: React.Dispatch<React.SetStateAction<SortKey>>;
  selectedSortKey: SortKey;
  defaultSortKey: SortKey;
  className?: string;
  onSortChange?: (sortKey: SortKey) => void;
}) => {
  function handleSortChange(key: SortKey): void {
    setSelectedSortKey((prevKey) => {
      const newSortKey =
        key === defaultSortKey
          ? defaultSortKey
          : prevKey === key
          ? defaultSortKey
          : key;

      if (prevKey !== newSortKey) {
        onSortChange(newSortKey); // Call onSortChange only if the key changes
      }

      return newSortKey; // Update the state
    });
  }

  return (
    <div className={cn("p-2 border rounded-sm m-2", className)}>
      <p className="font-bold text-base">Sort</p>
      {singleSortOptions.map((option, index) => (
        <SortOptionButton
          selectedSortKey={selectedSortKey}
          handleSortChange={handleSortChange}
          option={option}
          key={index}
        />
      ))}
      {groupSortOptions.map((group, groupIndex) => (
        <div key={groupIndex} className="flex gap-2">
          {group.map((option, optionIndex) => (
            <SortOptionButton
              selectedSortKey={selectedSortKey}
              handleSortChange={handleSortChange}
              option={option}
              key={optionIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const SortOptionButton = <SortKey extends string, ModelField extends string>({
  selectedSortKey,
  option,
  handleSortChange,
}: {
  option: BlogSortOption<SortKey, ModelField>;
  handleSortChange: (key: SortKey) => void;
  selectedSortKey: SortKey;
}) => {
  const isSelectedSort = selectedSortKey === option.key;
  return (
    <div style={{ marginBottom: "10px" }}>
      <button
        type="button"
        className={cn("list-none cursor-pointer p-1 border rounded-sm", {
          "text-white border bg-indigo-500": isSelectedSort,
        })}
        onClick={() => handleSortChange(option.key)}
      >
        {option.key}
      </button>
    </div>
  );
};

export default SelectSortOption;
