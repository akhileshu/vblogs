import { cn } from "@/lib/utils";

interface InputProps {
  className?: string;
}

export function Blog({ className }: InputProps) {
  return <div className={cn("", className)}></div>;
}
