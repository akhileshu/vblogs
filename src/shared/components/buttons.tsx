import { cn } from "@/lib/utils";
import { Loader } from "./Loader";
import Link from "next/link";

interface InputProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string | JSX.Element;
  variant?: "primary" | "outline"; // Add the variant prop
  isPending?: boolean;
}

type FancyBtnProps = {
  color?: string;
  className?: string;
  text: string | JSX.Element;
};

export const FancyBtn: React.FC<FancyBtnProps> = ({
  color = "indigo",
  className = "",
  text,
}) => {
  return (
      <button
        className={`px-1 m-1 text-xs bg-${color}-100 border-[1px] border-solid border-${color}-300 text-${color}-600 rounded-sm px-1 ${className}`}
      >
        {text}
      </button>
  );
};

export function Btn({
  className,
  isPending,
  text,
  variant = "primary",
  ...props
}: InputProps) {
  return (
    <button
      {...props}
      className={cn(
        "py-1  px-2 rounded-sm text-sm disabled:cursor-not-allowed",
        {
          " bg-indigo-500  text-white ": variant === "primary",
          "bg-white border-2 py-[2px]  border-indigo-500 text-indigo-500":
            variant === "outline",
          "hover:brightness-90":
            !props.disabled && !isPending && variant === "primary",
        },
        className
      )}
    >
      <span className="flex-center gap-2">
        {text}
        <Loader
          className={cn("size-5", {
            hidden: isPending === undefined,
            invisible: isPending === false,
          })}
        />
      </span>
    </button>
  );
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  text: string | JSX.Element;
  variant?: "primary" | "outline";
  href: string;
}

export function StyledLink({
  href,
  className,
  text,
  variant = "primary",
  ...props
}: LinkProps) {
  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "inline-flex items-center justify-center py-1 px-2 rounded-sm text-sm disabled:cursor-not-allowed",
        {
          "bg-indigo-500 text-white": variant === "primary",
          "bg-white border-2 py-[2px] border-indigo-500 text-indigo-500":
            variant === "outline",
        },
        className
      )}
    >
      <span className="flex-center gap-2">{text}</span>
    </Link>
  );
}
