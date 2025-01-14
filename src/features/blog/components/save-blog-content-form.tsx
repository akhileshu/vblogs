"use client";

import { useSessionUserByRole } from "@/shared/lib/auth/useClientSessionUtils";
import SlateRichText from "@/features/blog/richText/slate-rich-text";
import { saveBlogContentHandler } from "@/server-actions/prisma-handlers/blog/save-blog-content-Handler";
import { BlogServiceImplementation } from "@/services/prisma/blog/blog-service";
import { revalidateTagUtil } from "@/shared/utils/revalidateTagUtils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { Descendant } from "slate";
import { extractResultData } from "@/server-actions/utils/response";
import { appToast } from "@/shared/lib/toast";

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
  const [result, formAction] = useFormState(saveBlogContentHandler, null);
  const router = useRouter();
  const [content, setContent] = useState("");

  const author = useSessionUserByRole("AUTHOR");
  if (!author) {
    throw new Error("Author not found");
  }

const {  success, errorMsg } = extractResultData(result);
  if (success) {
    router.push(`/dashboard`);
    revalidateTagUtil(`get-blogs-by-author-id-${author.id}`);
  }
  //todo : utilizing fieldErrors for errorfeedback whenever appropriate
  useEffect(() => {
    if (errorMsg) {
      appToast.error(errorMsg);
      console.log(errorMsg);
    }
  }, [errorMsg]);

  return (
    <div>
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
    </div>
  );
}
