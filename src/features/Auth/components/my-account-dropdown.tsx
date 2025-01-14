import { Avatar } from "@/shared/components/avatar";
import { Btn } from "@/shared/components/buttons";
import { AppDropDownMenu } from "@/shared/components/dropdown-menu";
import { getUrl } from "@/shared/lib/get-url";
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
        <Link key={"profile"} href={getUrl("userProfile")}>
          profile
        </Link>,
      ]}
      trigger={<Avatar url={avatarUrl} />}
    />
  );
}
