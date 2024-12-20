import { Btn } from "@/shared/components/app/buttons";
import { openPopupWindow } from "@/shared/lib/open-popup-window";
import { FcGoogle } from "react-icons/fc";

export const JoinWithGoogleButton = () => {
  return (
    <Btn
      key={"signOut"}
      onClick={() =>
        openPopupWindow({ url: "/google-signin", windowName: "google-signin" })
      }
      text={
        <span className="flex-center font-bold">
          Join with <FcGoogle size={25} className="ml-1" />
        </span>
      }
      variant="outline"
    />
  );
};
