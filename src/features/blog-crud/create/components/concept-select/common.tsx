"use client";
import { SubmitButton } from "@/components/app/formSubmitButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";
import { addBlogMetaData } from "../../actions/addBlogMetadata";
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
      className="border p-1 mb-2 w-72"
    />
  );
}

export function AddBlogMetadataForm({
  tags,
  selectedTopicId,
}: {
  tags: {
    id: string;
    title: string;
  }[];
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
        value={JSON.stringify(tags)}
      />
      <SubmitButton />
    </form>
  );
}
