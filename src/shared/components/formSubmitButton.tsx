import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";

export function SubmitButton({
  label = "submit",
  pendingLabel = "Submiting...",
  className,
}: {
  label?: React.ReactNode;
  pendingLabel?: React.ReactNode;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      className={cn("px-2 my-1 border rounded-sm", className)}
      type="submit"
      aria-disabled={pending}
    >
      {pending ? pendingLabel : label}
    </button>
  );
}
