import { catchErrorTyped } from "@/shared/lib/errors/catchErrorTyped";
import { BlogSearchQueryParameters } from "@/shared/types/blog-search";
import { LoaderWrapper } from "@/shared/components/Loader";
import { getBlogSearchResults } from "@/features/blog/search-results/action";
import Link from "next/link";
import { getUrl } from "@/shared/lib/get-url";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<BlogSearchQueryParameters>;
}) {
  const filters = await searchParams;
  const [blogSearchError, blogSearchResults] = await catchErrorTyped(
    getBlogSearchResults(filters)
  );

  return (
    <LoaderWrapper errorMsg={blogSearchError?.message}>
      {blogSearchResults && blogSearchResults.length > 0 ? (
        <ul className="list-none space-y-3 flex flex-col">
          {blogSearchResults
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
      ) : (
        <p>No results found</p>
      )}
    </LoaderWrapper>
  );
}
