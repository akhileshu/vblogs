import { cn } from "@/lib/utils";
import Image from "next/image";

export const Avatar = ({ url, className }: { url: string, className?: string }) => {
  return (
    <Image
      src={url}
      alt="User Avatar"
      width={30}
      height={30}
      className={cn("object-cover aspect-square rounded-full border-2 border-indigo-500 border-solid",className)}
    ></Image>
  );
};