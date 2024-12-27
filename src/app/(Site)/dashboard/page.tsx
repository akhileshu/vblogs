import { getLoggedInAuthorBlogs } from "@/features/blog/create/actions/getBlog";
import { MyBlogs } from "@/features/dashboard/components/my-blogs";
import { catchErrorTyped } from "@/shared/lib/errors/catchErrorTyped";

export default async function page() {
  const [error, data] = await catchErrorTyped(getLoggedInAuthorBlogs());
  return (
    <div>
      <div>Dashboard</div>

      <MyBlogs errorMsg={error?.message} data={data} />
    </div>
  );
}
