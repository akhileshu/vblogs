import { getBlogContentBySlug } from "@/features/blog/create/actions/getBlog";
import SlateRichText from "@/features/blog/richText/slate-rich-text";
import { LoaderWrapper } from "@/shared/components/Loader";
import { catchErrorTyped } from "@/shared/lib/errors/catchErrorTyped";
import { CatchErrorTypedResult } from "@/shared/types/resolvedPromise";
import { Descendant } from "slate";
import SaveBlogContentForm from "../../../../../features/blog/components/save-blog-content-form";

export default async function BlogReadOrCreateOrEdit({
  params,
}: {
  params: Promise<{ mode: "create" | "edit" | "read"; slug: string }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const { mode, slug } = await params;
  let blogContentError: CatchErrorTypedResult<
    Awaited<ReturnType<typeof getBlogContentBySlug>>
  >[0];
  let blogContentData: CatchErrorTypedResult<
    Awaited<ReturnType<typeof getBlogContentBySlug>>
  >[1];
  if (mode === "edit" || mode === "read") {
    [blogContentError, blogContentData] = await catchErrorTyped(
      getBlogContentBySlug(slug)
    );
  }

  return (
    <LoaderWrapper
      // isLoading={
      //   (mode === "edit" || mode === "read") &&
      //   !blogContentData &&
      //   !blogContentError
      // }
      errorMsg={blogContentError?.message}
    >
      {mode === "create" || mode === "edit" ? (
        <SaveBlogContentForm
          blogContent={blogContentData}
          mode={mode}
          params={{ slug }}
        />
      ) : mode === "read" ? (
        <SlateRichText
          contentMode={mode}
          contentJSON={blogContentData?.fullContent as Descendant[]}
        />
      ) : (
        <p>Invalid mode specified</p>
      )}
    </LoaderWrapper>
  );
}
