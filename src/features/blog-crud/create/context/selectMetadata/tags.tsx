import { CatchErrorTypedReturn } from "@/types/resolvedPromise";
import { createContext, ReactNode, useContext, useState } from "react";
import { getTagsByTopicId } from "../../actions/getCategory";

type Tags = {
  selectedTagId: string | null;
  errorResultArray: CatchErrorTypedReturn<typeof getTagsByTopicId>;
};

type TagsContextType = {
  tags: Tags;
  setTagId: (tagId: string | null) => void;
  setTagErrorResultArray: (
    errorResult: CatchErrorTypedReturn<typeof getTagsByTopicId>
  ) => void;
  resetTags: () => void;
  setTags: (tags: Tags) => void;
};

const TagsContext = createContext<TagsContextType | undefined>(undefined);

export const useTags = () => {
  const context = useContext(TagsContext);
  if (!context) {
    throw new Error("useTag must be used within a TagProvider");
  }
  return context;
};

export const TagsProvider = ({ children }: { children: ReactNode }) => {
  const [tags, setTags] = useState<Tags>({
    selectedTagId: null,
    errorResultArray: [undefined, undefined],
  });

  // Function to update the selected tag ID
  const setTagId = (tagId: string | null) => {
    setTags((prev) => ({ ...prev, selectedTagId: tagId }));
  };

  // Function to update the error/result array for tags
  const setTagErrorResultArray = (
    errorResult: CatchErrorTypedReturn<typeof getTagsByTopicId>
  ) => {
    setTags((prev) => ({ ...prev, errorResultArray: errorResult }));
  };

  // Function to reset the tags state
  const resetTags = () => {
    setTags({
      selectedTagId: null,
      errorResultArray: [undefined, undefined],
    });
  };

  return (
    <TagsContext.Provider
      value={{ tags, setTagId, setTagErrorResultArray, resetTags,setTags }}
    >
      {children}
    </TagsContext.Provider>
  );
};
