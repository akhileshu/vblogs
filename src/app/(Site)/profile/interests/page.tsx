import UserInterest from "@/features/profile/components/user-interest";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function page({params,searchParams}:PageProps) {
  return (
    <UserInterest/>
  );
}
