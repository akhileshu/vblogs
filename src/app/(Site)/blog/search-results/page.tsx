import { Blogs } from "@/features/blog/read/components/blogs";
import { getBlogSearchResultsHandler } from "@/server-actions/prisma-handlers/blog/get-blog-search-results-Handler";
import { AppSuspense } from "@/shared/components/Loader";
import { BlogSearchQueryParameters } from "@/shared/types/models/blog";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<BlogSearchQueryParameters>;
}) {
  const filters = await searchParams;
  const result = await getBlogSearchResultsHandler(filters);
  return (
    /* 
    note:
    if loading not handled , will propage to app and causes blank screen
    nested passing of promise data and handling at end in loadererrorwrapper didnot trigger loading because next component will not render until promise fullfills and until then white screen appears

    when to use:
    AppSuspense : when using result (the entire promise)
    LoaderErrorWrapper : when using result.data (resolved data)
    */

    <AppSuspense>
      <Blogs result={result} />
    </AppSuspense>
  );
}
