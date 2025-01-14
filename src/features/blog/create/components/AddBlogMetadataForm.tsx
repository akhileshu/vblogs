"use client";
import { addBlogMetadataHandler } from "@/server-actions/prisma-handlers/blog/add-blog-metadata-Handler";
import { extractResultData } from "@/server-actions/utils/response";
import { SubmitButton } from "@/shared/components/formSubmitButton";
import AppInput, { AppCard } from "@/shared/components/standard-components";
import { getUrl } from "@/shared/lib/get-url";
import { appToast } from "@/shared/lib/toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

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
  const { data, success, errorMsg, fieldErrors } = extractResultData(result);
  if (success) router.push(getUrl("blogCreate", data?.slug));

  useEffect(() => {
    if (errorMsg) {
      appToast.error(errorMsg);
      console.log(errorMsg);
    }
  }, [errorMsg]);

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
