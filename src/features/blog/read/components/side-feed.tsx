import { cn } from "@/lib/utils";
interface InputProps {
  className?: string;
}

export function Feed({ className }: InputProps) {
  return (
    <div className={cn("", className)}>
      <h2 className="text-lg font-semibold">Related Content</h2>
      <ul className="list-disc list-inside text-sm text-slate-600">
        <li>10 Tips for Becoming a Better Developer</li>

        <li>The Future of Web Development</li>

        <li>How to Master React in 2024</li>
        <li>Understanding Asynchronous JavaScript</li>
        <li>The Future of Web Development</li>
        <li>10 Tips for Becoming a Better Developer</li>

        <li>The Future of Web Development</li>

        <li>How to Master React in 2024</li>
        <li>Understanding Asynchronous JavaScript</li>
        <li>The Future of Web Development</li>
      </ul>
    </div>
  );
}
