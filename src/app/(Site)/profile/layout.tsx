import Profile from "@/features/profile/components/personal-details/profile";
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
      <div className="border rounded-md h-full p-5 space-y-4 divide-y">
        <Profile className="" />
        <ProfileSidebarNavigation className="" />
      </div>
      <div className="border rounded-md mx-2 h-full">{children}</div>
    </OneThreeLayout>
  );
}
