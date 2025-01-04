import { useFormStatus } from "react-dom";

export function SubmitButton({
  label = "submit",
  pendingLabel = "Submiting...",
}: {
  label?: string;
  pendingLabel?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      className="p-2 my-1 border rounded-sm"
      type="submit"
      aria-disabled={pending}
    >
      {pending ? pendingLabel : label}
    </button>
  );
}
