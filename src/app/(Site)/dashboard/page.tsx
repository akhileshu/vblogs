import { getServerSessionUserByRole } from "@/features/Auth/utils/getServerSessionUtils";
import { MyBlogs } from "@/features/dashboard/components/my-blogs";
import { getCachedBlogsByAuthorIdHandler } from "@/server-actions/prisma-handlers/blog/get-blogs-by-author-id-Handler";
import { ErrorWhileFetching, NoDataMessage } from "@/shared/components/error";
import { LoaderWrapper } from "@/shared/components/Loader";
import { BlogSearchQueryParameters } from "@/shared/types/models/blog";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<BlogSearchQueryParameters>;
}) {
  const filters = await searchParams;
  const user = await getServerSessionUserByRole("AUTHOR");
  if (!user) {
    return <p>Please Login as Author</p>;
  }
  const result = await getCachedBlogsByAuthorIdHandler(user.id, filters);
  if (!result.success) return <ErrorWhileFetching errorMsg={result.errorMsg} />;
  if (!result.data.length)
    return <NoDataMessage message="you did not publish any blogs yet!" />;
  return (
    <LoaderWrapper>
      <div>Dashboard</div>
      <MyBlogs data={result.data} />
    </LoaderWrapper>
  );
}
