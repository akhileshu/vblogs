"use client";
import { useSessionUserByRole } from "@/features/Auth/utils/useClientSessionUtils";
import { deleteBlogHandler } from "@/server-actions/prisma-handlers/blog";
import { extractResultData } from "@/server-actions/utils/response";
import { SubmitButton } from "@/shared/components/formSubmitButton";
import { appToast } from "@/shared/lib/toast";
import { revalidateTagUtil } from "@/shared/utils/revalidateTagUtils";
import { useEffect } from "react";
import { useFormState } from "react-dom";

type DeleteBlogProps = {
  className?: string;
  blogId: string;
};

export const DeleteBlog: React.FC<DeleteBlogProps> = ({ blogId }) => {
  const [result, formAction] = useFormState(deleteBlogHandler, null);
  const { success, errorMsg } = extractResultData(result);
  const author = useSessionUserByRole("AUTHOR");
  if (!author) {
    throw new Error("Author not found");
  }

  useEffect(() => {
    if (errorMsg) {
      appToast.error(errorMsg);
      console.log(errorMsg);
    }
    if (success) {
      appToast.success("blog deleted");
      revalidateTagUtil(`get-blogs-by-author-id-${author.id}`);
    }
  }, [author.id, errorMsg, success]);

  return (
    <form action={formAction}>
      <input name="blogId" type="hidden" value={blogId} />
      <SubmitButton label="Delete" pendingLabel="Deleting..." />
    </form>
  );
};
