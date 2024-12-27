import { Avatar } from "@/shared/components/avatar";
import { Btn } from "@/shared/components/buttons";
import { AppDropDownMenu } from "@/shared/components/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";

export function MyAccountDropdown({ avatarUrl }: { avatarUrl: string }) {
  return (
    <AppDropDownMenu
      label="My Account"
      items={[
        <Btn
          key={"signOut"}
          onClick={() => signOut()}
          text="Sign Out"
          variant="outline"
        />,
        <Link key={"profile"} href="/site">
          profile
        </Link>,
      ]}
      trigger={<Avatar url={avatarUrl} />}
    />
  );
}
