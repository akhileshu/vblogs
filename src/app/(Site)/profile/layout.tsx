import UserBasicDetails from "@/features/profile/components/details";
import ProfileSidebarNavigation from "@/features/profile/components/profile-inner-sidebar";
import { cn } from "@/lib/utils";
import OneThreeLayout from "@/shared/components/layouts";

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <OneThreeLayout className={cn("h-screen")}>
      <div className="border rounded-md h-full">
        <UserBasicDetails className="m-2" />
        <ProfileSidebarNavigation className="m-2" />
      </div>
      <div className="border rounded-md mx-2 h-full">{children}</div>
    </OneThreeLayout>
  );
}
