import React from "react";
import { cn } from "@/lib/utils";

type UserInterestProps = {
  className?: string;
};

const UserInterest: React.FC<UserInterestProps> = ({className}) => {
  return (
    <div className={cn("",className)}>
      {/* Component JSX */}
      UserInterest works!
    </div>
  );
};

export default UserInterest;
