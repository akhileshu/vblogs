"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";
import AppInput, { AppCard } from "@/shared/components/standard-components";
import { SubmitButton } from "@/shared/components/formSubmitButton";
import { getUrl } from "@/shared/lib/get-url";
import { addBlogMetadataHandler } from "@/server-actions/prisma-handlers/blog/add-blog-metadata-Handler";

export function AddBlogMetadataForm({
  tagIds,
  topicId,
}: {
  tagIds: string[];
  topicId: string;
}) {
  const [title, setTitle] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const initialState = {
    fieldErrors: undefined,
    errorMsg: undefined,
    data: undefined,
    success:false
  };
  const [result, formAction] = useFormState(addBlogMetadataHandler, null);
  const router = useRouter();

  if (result?.success) router.push(getUrl("blogCreate", result.data.slug));
  else {
    console.error(result?.errorMsg);
  }

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
