import { getServerSessionUserByRole } from "@/shared/lib/auth/getServerSessionUtils";
import { getCachedBlogsByAuthorIdHandler } from "@/server-actions/prisma-handlers/blog/get-blogs-by-author-id-Handler";
import { AppSuspense } from "@/shared/components/Loader";
import { BlogSearchQueryParameters } from "@/shared/types/models/blog";
import { Blogs } from "@/features/blog/read/components/blogs";
import { UnauthorizedAccess } from "@/shared/components/unauthrorized-access";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<BlogSearchQueryParameters>;
}) {
  const filters = await searchParams; // as now sort params
  const author = await getServerSessionUserByRole("AUTHOR");
  if (!author || !author.id) return <UnauthorizedAccess />;
  const result = await getCachedBlogsByAuthorIdHandler(author.id, filters);
  return (
    <div>
      <h1>Dashboard</h1>
      <AppSuspense message="Loading your blogs">
        <Blogs authorId={author.id} result={result} />
      </AppSuspense>
    </div>
  );
}


