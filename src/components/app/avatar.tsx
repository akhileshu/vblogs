import Image from "next/image";

export const Avatar = ({ url }: { url: string }) => {
  return (
    <Image
      src={url}
      alt="User Avatar"
      width={30}
      height={30}
      className="object-cover aspect-square rounded-full border-2 border-indigo-500 border-solid"
    ></Image>
  );
};