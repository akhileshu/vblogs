import React from "react";
import { cn } from "@/lib/utils";
import OneThreeLayout from "@/shared/components/layouts";
import Details from "./details";
import { FaEdit } from "react-icons/fa";

type ProfilePageProps = {
  className?: string;
};

const ProfilePage: React.FC<ProfilePageProps> = ({ className }) => {
  return (
    <OneThreeLayout className={cn("h-screen", className)}>
      <div className="border rounded-md h-full">
        <div className="relative">
          <Details className="m-2" />
          <FaEdit className="absolute top-5 right-10 size-5 hover:text-gray-500" />
        </div>
      </div>
      <div className="border rounded-md mx-2 h-full">three</div>
    </OneThreeLayout>
  );
};

export default ProfilePage;
