import { getBlogSearchResultsHandler } from "@/server-actions/prisma-handlers/blog/get-blog-search-results-Handler";
import { ErrorWhileFetching, NoDataMessage } from "@/shared/components/error";
import { LoaderWrapper } from "@/shared/components/Loader";
import { getUrl } from "@/shared/lib/get-url";
import { BlogSearchQueryParameters } from "@/shared/types/models/blog";
import Link from "next/link";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<BlogSearchQueryParameters>;
}) {
  const filters = await searchParams;
  const result = await getBlogSearchResultsHandler(filters);
  if (!result.success) {
    return <ErrorWhileFetching errorMsg={result.errorMsg} />;
  }
  if (!result.data.length) return <NoDataMessage message="No Blogs found" />;

  return (
    <LoaderWrapper>
      <ul className="list-none space-y-3 flex flex-col">
        {result.data
          .filter((blog) => blog.slug)
          .map((blog) => {
            return (
              <Link
                className="border p-2 rounded-sm"
                key={blog.id}
                href={getUrl("blogRead", blog.slug)}
              >
                <li> {blog.title}</li>
              </Link>
            );
          })}
      </ul>
    </LoaderWrapper>
  );
}
