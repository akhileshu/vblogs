"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";
import { addBlogMetaData } from "../../actions/addBlogMetadata";
import AppInput, { AppCard } from "@/shared/components/standard-components";
import { SubmitButton } from "@/shared/components/formSubmitButton";
import { getUrl } from "@/shared/lib/get-url";

export function AddBlogMetadataForm({
  tagIds,
  topicId,
}: {
  tagIds: string[];
  topicId: string;
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
  if (data) router.push(getUrl("blogCreate", data.slug));
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
        <input hidden name="topicId" type="text" id="topicId" value={topicId} />
        <input
          hidden
          name="tagIds"
          type="text"
          id="tagIds"
          value={JSON.stringify(tagIds)}
        />
        <SubmitButton />
      </form>
    </AppCard>
  );
}
