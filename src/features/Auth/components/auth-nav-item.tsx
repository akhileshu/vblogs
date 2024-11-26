import { useSession } from "next-auth/react";
import { JoinWithGoogleButton } from "./join-with-google-btn";
import { MyAccountDropdown } from "./my-account-dropdown";

export const AuthNavItem = () => {
  const { data: session } = useSession();
  if (!session?.user) return <JoinWithGoogleButton />;
  const avatarUrl =
    session.user.image ||
    "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png";
  return <MyAccountDropdown avatarUrl={avatarUrl} />;
};
