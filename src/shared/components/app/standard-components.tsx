import { cn } from "@/lib/utils";

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
      <p className="font-semibold my-2">{title}</p>
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

export default AppInput;
