"use client";
import { useSessionUserByRole } from "@/features/Auth/utils/useClientSessionUtils";
import { cn } from "@/lib/utils";
import { deleteBlogHandler } from "@/server-actions/prisma-handlers/blog";
import { extractResultData } from "@/server-actions/utils/response";
import { SubmitButton } from "@/shared/components/formSubmitButton";
import { appToast } from "@/shared/lib/toast";
import { revalidateTagUtil } from "@/shared/utils/revalidateTagUtils";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { MdOutlineDelete } from "react-icons/md";

type DeleteBlogProps = {
  className?: string;
  blogId: string;
  authorId: string;
};

export const DeleteBlog: React.FC<DeleteBlogProps> = ({ blogId,className,authorId }) => {
  const [result, formAction] = useFormState(deleteBlogHandler, null);
  const { success, errorMsg } = extractResultData(result);


  useEffect(() => {
    if (errorMsg) {
      appToast.error(errorMsg);
      console.log(errorMsg);
    }
    if (success) {
      appToast.success("blog deleted");
      revalidateTagUtil(`get-blogs-by-author-id-${authorId}`);
    }
  }, [authorId, errorMsg, success]);

  return (
    <form
      action={formAction}
      onSubmit={(e) => {
        if (!window.confirm("Are you sure you want to delete this blog?")) {
          e.preventDefault();
        }
      }}
    >
      <input name="blogId" type="hidden" value={blogId} />
      <SubmitButton
        className={cn("", className)}
        label={
          <div className="flex-center gap-2">
            <MdOutlineDelete />
            <span>Delete</span>
          </div>
        }
        pendingLabel="Deleting..."
      />
    </form>
  );
};
