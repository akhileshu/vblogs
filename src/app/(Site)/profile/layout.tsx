import ProfileInnerSidebar from "@/features/profile/components/profile-inner-sidebar";

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-2 divide-x-2">
      <ProfileInnerSidebar />
      {children}
    </div>
  );
}
