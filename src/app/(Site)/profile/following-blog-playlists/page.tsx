type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function page({params,searchParams}:PageProps) {
  return (
    <div className="">
      <h1>FollowingBlogPlaylists</h1>
      <p>Welcome to the FollowingBlogPlaylists page!</p>
    </div>
  );
}
