import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: [ReactNode, ReactNode];
  className?:string // To allow passing children inside the layout
}

const ThreeOneLayout: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("flex ", className)}>
      <div className="w-3/4 p-1 ">
        {/* Right component or content */}
        {children[0]}
      </div>
      <div className="w-1/4 bg-gray-100 p-1">
        {/* Left component or content */}
        {children[1]}
      </div>
    </div>
  );
};

export default ThreeOneLayout;
