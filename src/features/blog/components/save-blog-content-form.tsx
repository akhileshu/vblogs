"use client";

import SlateRichText from "@/features/blog/richText/slate-rich-text";
import { saveBlogContentHandler } from "@/server-actions/prisma-handlers/blog/save-blog-content-Handler";
import { BlogService } from "@/services/prisma/blog/blog-service";
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
  blogContent?: Awaited<ReturnType<BlogService["getBlogContentBySlug"]>>;
}) {
  const [result, formAction] = useFormState(saveBlogContentHandler, null);
  const router = useRouter();
  const [content, setContent] = useState("");

  if (result?.success) router.push(`/dashboard`);

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
