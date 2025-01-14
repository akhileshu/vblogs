type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function page({params,searchParams}:PageProps) {
  return (
    <div className="">
      <h1>Interests</h1>
      <p>Welcome to the Interests page!</p>
    </div>
  );
}
