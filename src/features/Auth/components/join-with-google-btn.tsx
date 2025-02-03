import { Btn } from "@/shared/components/buttons";
import { openPopupWindow } from "@/shared/lib/open-popup-window";
import { FcGoogle } from "react-icons/fc";

export const JoinWithGoogleButton = () => {
  return (
    <Btn
      key={"signOut"}
      onClick={() =>
        openPopupWindow({ url: "/google-signin", windowName: "google-signin" })
      }
      icon={<FcGoogle size={25} className="ml-1" />}
      text="Join with"
      variant="outline"
    />
  );
};
