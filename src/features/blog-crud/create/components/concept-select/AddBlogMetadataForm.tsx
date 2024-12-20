"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";
import { addBlogMetaData } from "../../actions/addBlogMetadata";
import AppInput, { AppCard } from "@/shared/components/app/standard-components";
import { SubmitButton } from "@/shared/components/app/formSubmitButton";

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
    <AppCard title="Provide additional details" widthVariant="medium">
      <form action={formAction}>
        <label className="text-gray-500" htmlFor="title">
          give a title
        </label>
        <AppInput
          widthVariant="full"
          type="text"
          placeholder={"ex: How to create a blog in Next.js"}
          value={title}
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
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
    </AppCard>
  );
}
