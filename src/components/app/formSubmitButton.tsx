import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="p-1 m-1 border-[1px] rounded-sm" type="submit" aria-disabled={pending}>
      {pending?"Submiting...":"submit"}
    </button>
  );
}
