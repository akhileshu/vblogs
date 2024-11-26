import { cn } from "@/lib/utils";

interface InputProps {
  className?: string;
}

export default function Input({ className }: InputProps) {
  return (
    <div className={cn('', className)}>root page for - with navbars</div>
  );
}