import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="p-2 my-1 border rounded-sm" type="submit" aria-disabled={pending}>
      {pending?"Submiting...":"submit"}
    </button>
  );
}
