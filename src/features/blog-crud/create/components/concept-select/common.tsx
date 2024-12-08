"use client";
import { SubmitButton } from "@/components/app/formSubmitButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";
import { addBlogMetaData } from "../../actions/addBlogMetadata";

export function getFilteredArray<T extends { title: string; id: string }>(
  array: T[] | undefined | null,
  searchQuery: string,
  selectedTagIds?: string[],
  selectedId?: string
) {
  const filterOutSelectedTags = (itemId: string) => {
    return !selectedTagIds || !selectedTagIds.some((id) => id === itemId);
  };
  return array?.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      item.id !== selectedId &&
      filterOutSelectedTags(item.id)
  );
}

export function SelectionSearchInput({
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
      className="border p-1 mb-2 w-full rounded-sm text-sm"
    />
  );
}

export function AddBlogMetadataForm({
  tagIds,
  selectedTopicId,
}: {
  tagIds: string[];
  selectedTopicId: string;
}) {
  const [title, setTitle] = useState<string>("");

  const initialState = {
    fieldErrors: undefined,
    errorMsg: undefined,
    data: undefined,
  };
  const [state, formAction] = useFormState(addBlogMetaData, null);
  const router = useRouter();

  const { data, errorMsg, fieldErrors } = state || {};
  if (data) router.push(`/blog/create/${data.id}`);
  console.log({ errorMsg, fieldErrors, initialState });

  return (
    <form action={formAction}>
      <label htmlFor="title">title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        id="title"
        name="title"
        required
      />
      <input
        hidden
        name="topicId"
        type="text"
        id="topicId"
        value={selectedTopicId}
      />
      <input
        hidden
        name="tags"
        type="text"
        id="tags"
        value={JSON.stringify(tagIds)}
      />
      <SubmitButton />
    </form>
  );
}
