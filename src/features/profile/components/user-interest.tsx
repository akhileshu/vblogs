import React from "react";
import { cn } from "@/lib/utils";
import { IoMdAdd } from "react-icons/io";
import { Btn } from "@/shared/components/buttons";
import { AppCard } from "@/shared/components/standard-components";
type UserInterestProps = {
  className?: string;
};

const UserInterest: React.FC<UserInterestProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <AppCard className="min-h-64 m-2 border-none flex gap-2 divide-x">
        <Technologies className="flex-1" />
        <Topics className="flex-1 pl-2" />
      </AppCard>
    </div>
  );
};

export default UserInterest;

const Technologies = ({ className }: { className?: string }) => {
  return (
    <div className={cn("", className)}>
      <Btn
        text={
          <>
            <IoMdAdd size={20} /> Add Technologies
          </>
        }
      ></Btn>
    </div>
  );
};
const Topics = ({className}:{className?:string}) => {
  return (
    <div className={cn("",className)}>
      <Btn
        text={
          <>
            <IoMdAdd size={20} /> Add Topics
          </>
        }
      ></Btn>
    </div>
  );
};
