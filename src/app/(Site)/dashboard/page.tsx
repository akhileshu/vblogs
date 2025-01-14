import { getServerSessionUserByRole } from "@/shared/lib/auth/getServerSessionUtils";
import { MyBlogs } from "@/features/dashboard/components/my-blogs";
import { getCachedBlogsByAuthorIdHandler } from "@/server-actions/prisma-handlers/blog/get-blogs-by-author-id-Handler";
import { AppSuspense } from "@/shared/components/Loader";
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
  return (
    <AppSuspense>
      <div>Dashboard</div>
      <MyBlogs result={result} />
    </AppSuspense>
  );
}
