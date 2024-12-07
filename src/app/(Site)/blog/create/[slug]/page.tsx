export default async function BlogCreatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <div>Write content for blog id: {slug}</div>;
}
