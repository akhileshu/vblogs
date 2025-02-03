"use client";
import { addBlogMetadataHandler } from "@/server-actions/prisma-handlers/blog/add-blog-metadata-Handler";
import { SubmitButton } from "@/shared/components/formSubmitButton";
import AppInput, { AppCard } from "@/shared/components/standard-components";
import { useFormHandler } from "@/shared/hooks/useFormHandler";
import { getUrl } from "@/shared/lib/get-url";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function AddBlogMetadataForm({
  tagIds,
  topicId,
}: {
  tagIds: string[];
  topicId: string;
}) {
  const [title, setTitle] = useState<string>("");
  const router = useRouter();

  const { fieldErrors, formAction } = useFormHandler({
    actionHandler: addBlogMetadataHandler,
    onSuccess: (data) => {
      router.push(getUrl("blogCreate", data?.slug));
    },
    successMessage: "Blog metadata added successfully!",
  });

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
        <p className="text-red-500">{fieldErrors?.title}</p>
        <input hidden name="topicId" type="text" id="topicId" value={topicId} />
        <p className="text-red-500">{fieldErrors?.topicId}</p>
        <input
          hidden
          name="tagIds"
          type="text"
          id="tagIds"
          value={JSON.stringify(tagIds)}
        />
        <p className="text-red-500">{fieldErrors?.tagIds}</p>
        <SubmitButton />
      </form>
    </AppCard>
  );
}
