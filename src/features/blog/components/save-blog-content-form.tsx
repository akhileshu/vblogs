"use client";

import { getBlogContentBySlug } from "@/features/blog/create/actions/getBlog";
import { saveBlogContent } from "@/features/blog/create/actions/saveBlogContent";
import SlateRichText from "@/features/blog/richText/slate-rich-text";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";
import { Descendant } from "slate";

export default function SaveBlogContentForm({
  params: { slug },
  mode,
  blogContent,
}: {
  params: { slug: string };
  mode: "create" | "edit";
  blogContent?: Awaited<ReturnType<typeof getBlogContentBySlug>>;
}) {
  const [state, formAction] = useFormState(saveBlogContent, null);
  const router = useRouter();
  const [content, setContent] = useState("");

  const { data, errorMsg, fieldErrors } = state || {};
  if (data) router.push(`/dashboard`);

  return (
    <div>
      <form action={formAction}>
        <input type="hidden" name="slug" value={slug} />
        <input type="text" name="content" value={content} />
        {mode === "edit" ? (
          <SlateRichText
            contentJSON={blogContent?.fullContent as Descendant[]}
            contentMode={mode}
            SaveContent={(contentJSON) => {
              setContent(JSON.stringify(contentJSON));
            }}
          />
        ) : (
          <SlateRichText
            contentMode={mode}
            SaveContent={(contentJSON) => {
              setContent(JSON.stringify(contentJSON));
            }}
          />
        )}
      </form>
    </div>
  );
}
