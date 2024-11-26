import { Avatar } from "@/components/app/avatar";
import { Btn } from "@/components/app/buttons";
import { AppDropDownMenu } from "@/components/app/dropdown-menu";
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