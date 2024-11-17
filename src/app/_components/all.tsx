import { cn } from "@/lib/utils";

interface InputProps {
  className?: string;
  text: string;
  variant?: "primary" | "outline"; // Add the variant prop
}

type FancyBtnProps = {
  color?: string;
  className?: string;
  text: string;
};

export const FancyBtn: React.FC<FancyBtnProps> = ({
  color = "indigo",
  className = "",
  text,
}) => {
  return (
    <div>
      <div
        className={`text-xs bg-${color}-100 border-[1px] border-solid border-${color}-300 text-${color}-600 rounded-sm px-1 ${className}`}
      >
        {text}
      </div>
    </div>
  );
};

export function Btn({ className, text, variant = "primary" }: InputProps) {
  return (
    <div
      className={cn(
        "py-1 px-2 cursor-pointer rounded-sm text-sm ",
        {
          " bg-indigo-500 hover:bg-indigo-600 text-white rounded-sm":
            variant === "primary",
          "bg-white border-2 py-[2px]  border-indigo-500 text-indigo-500":
            variant === "outline",
        },
        className
      )}
    >
      {text}
    </div>
  );
}
