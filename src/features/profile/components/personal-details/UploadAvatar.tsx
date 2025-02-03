import { Avatar } from "@/shared/components/avatar";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";

const UploadAvatar = ({ currentUrl }: { currentUrl: string }) => {
  const [avatar, setAvatar] = useState<string>(currentUrl);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar className="size-16 rounded-none border-none" url={avatar} />
      <label className="relative cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        <CgProfile className="text-3xl" />
      </label>
    </div>
  );
};

export default UploadAvatar;

/* 
learning: bg-black/40 can controll opacity this way

todo  - more options for upload avatar
<AppToolTip tooltipContent={"remove"} trigger={<IoCloseCircleSharp className="mt-5" />} />
*/
