"use client";

import { AddBlogMetadataForm } from "@/features/blog/create/components/concept-select/AddBlogMetadataForm";
import {
  DropdownProvider,
  fetchCreateBlogConcepts,
  HierarchialDropdowns,
  useDropdownContext,
} from "@/features/hierarchical-dropdowns";

export default function page() {
  return (
    <DropdownProvider>
      <SelectMetadata />
    </DropdownProvider>
  );
}

const SelectMetadata = () => {
  const { selectedOptions } = useDropdownContext();
  const selectedTopicId = selectedOptions[2]?.[0]?.id ;
  const selectedTagIds = selectedOptions[3]?.map((option) => option.id) || [];
  return (
    <div className="flex gap-2 flex-wrap">
      <HierarchialDropdowns
        className="flex-1 m-0"
        fetchOptionsForLevel={fetchCreateBlogConcepts}
      />
      {selectedTagIds.length > 0 && (
        <AddBlogMetadataForm
          tagIds={selectedTagIds}
          topicId={selectedTopicId}
        />
      )}
    </div>
  );
};
