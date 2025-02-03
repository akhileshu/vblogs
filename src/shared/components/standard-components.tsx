import { cn } from "@/lib/utils";
import Link from "next/link";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  widthVariant?: "small" | "medium" | "large" | "full" | "auto" | "fit";
  title?: string;
}

export const AppCard: React.FC<CardProps> = ({
  children,
  widthVariant = "auto",
  className,
  title,
  ...props
}) => {
  return (
    <div
      className={cn(
        "p-2 rounded-sm border-[1px]",
        {
          "w-full": widthVariant === "full",
          "w-[300px]": widthVariant === "small",
          "w-[400px]": widthVariant === "medium",
          "w-[700px]": widthVariant === "large",
          "w-fit": widthVariant === "fit",
        },
        className
      )}
      {...props}
    >
      {title ? <p className="font-semibold my-2">{title}</p> : null}

      {children}
    </div>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  widthVariant?: "small" | "medium" | "large" | "full" | "auto" | "fit";
}

export const AppInput: React.FC<InputProps> = ({
  widthVariant = "auto",
  className,
  ...props
}) => {
  return (
    <input
      className={cn(
        "border p-1 my-1 rounded-sm text-sm",
        {
          "w-full": widthVariant === "full",
          "w-[300px]": widthVariant === "small",
          "w-[400px]": widthVariant === "medium",
          "w-[700px]": widthVariant === "large",
          "w-fit": widthVariant === "fit",
        },
        className
      )}
      {...props}
    />
  );
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  href: string;
  children: string;
  className?:string
}

export const AppLink: React.FC<LinkProps> = ({
  href,isActive,children,className,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(
        " text-blue-500  underline cursor-pointer border border-transparent transition-all duration-200 px-2 py-1",
        {
          " rounded-md bg-blue-50 border-blue-300": isActive,
          "hover:text-blue-600": !isActive,
        },
       className
      )}
      {...props}
    >{children}</Link>
  );
};


const LabeledSection = ({ label, children }: { label: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <div className="border p-3 rounded-md">{children}</div>
    </div>
  );
};

export default LabeledSection;
