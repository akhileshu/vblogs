import UserInterest from "@/features/profile/components/user-interest/user-interest";
import { getLoggedInUserInterestsHandler } from "@/server-actions/prisma-handlers/user-interest";
import { AppSuspense } from "@/shared/components/Loader";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export default async function page({ params, searchParams }: PageProps) {
  const result = await getLoggedInUserInterestsHandler();
  return (
    <AppSuspense message="Loading your Interests">
      <UserInterest result={result} />
    </AppSuspense>
  );
}
