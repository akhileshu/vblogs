import { cn } from "@/lib/utils";
import React from "react";

type ProfilePageProps = {
  className?: string;
};

const ProfilePage: React.FC<ProfilePageProps> = ({ className }) => {
  return (
    <div className={cn("h-screen", className)}>
      
    </div>
  );
};

export default ProfilePage;
