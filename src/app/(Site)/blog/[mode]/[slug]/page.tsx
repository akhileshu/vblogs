import SlateRichText from "@/features/blog/richText/slate-rich-text";
import { getBlogContentBySlugHandler } from "@/server-actions/prisma-handlers/blog/get-blog-content-by-slug-Handler";
import { LoaderErrorWrapper } from "@/shared/components/Loader";
import { Descendant } from "slate";
import SaveBlogContentForm from "../../../../../features/blog/components/save-blog-content-form";
import { ErrorWhileFetching } from "@/shared/components/error";

export default async function BlogReadOrCreateOrEdit({
  params,
}: {
  params: Promise<{ mode: "create" | "edit" | "read"; slug: string }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const { mode, slug } = await params;

  //conditional fetching from serveraction
  const result: Awaited<ReturnType<typeof getBlogContentBySlugHandler>> | null =
    mode === "edit" || mode === "read"
      ? await getBlogContentBySlugHandler(slug)
      : null;

  if (result && !result.success) {
    return <ErrorWhileFetching errorMsg={result.errorMsg} />;
  }

  return (
    <LoaderErrorWrapper result={result!}>
      {mode === "create" || mode === "edit" ? (
        <SaveBlogContentForm
          blogContent={result?.data}
          mode={mode}
          params={{ slug }}
        />
      ) : mode === "read" ? (
        <SlateRichText
          contentMode={mode}
          contentJSON={result?.data?.fullContent as Descendant[]}
        />
      ) : (
        <p>Invalid mode specified</p>
      )}
    </LoaderErrorWrapper>
  );
}
