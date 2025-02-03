"use client";

import SlateRichText from "@/features/blog/richText/slate-rich-text";
import { saveBlogContentHandler } from "@/server-actions/prisma-handlers/blog/save-blog-content-Handler";
import { BlogServiceImplementation } from "@/services/prisma/blog/blog-service";
import { useFormHandler } from "@/shared/hooks/useFormHandler";
import { useSessionUserByRole } from "@/shared/lib/auth/useClientSessionUtils";
import { revalidateTagUtil } from "@/shared/utils/revalidateTagUtils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Descendant } from "slate";

export default function SaveBlogContentForm({
  params: { slug },
  mode,
  blogContent,
}: {
  params: { slug: string };
  mode: "create" | "edit";
  blogContent?: Awaited<
    ReturnType<BlogServiceImplementation["getBlogContentBySlug"]>
  >;
}) {
  const [content, setContent] = useState("");
  const router = useRouter();

  const author = useSessionUserByRole("AUTHOR");
  if (!author) {
    throw new Error("Author not found");
  }
  const {formAction} = useFormHandler({
    actionHandler: saveBlogContentHandler,
    onSuccess: () => {
      router.push(`/dashboard`);
      revalidateTagUtil(`get-blogs-by-author-id-${author.id}`);
    },
  });

  return (
    <form action={formAction}>
      <input type="hidden" name="slug" value={slug} />
      <input type="hidden" name="content" value={content} />
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
  );
}
