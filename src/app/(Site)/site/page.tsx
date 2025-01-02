"use client";
import { cn } from "@/lib/utils";
import { appToast } from "@/shared/lib/toast";
import { useRouter } from "next/navigation";

interface InputProps {
  className?: string;
}

export default function Input({ className }: InputProps) {
  const router = useRouter();
  return (
    <div>
      <div
        onClick={() => {
          appToast.error(
            "Internal server error",
"An internal server error occurred. Please try again later."
          );
        }}
        className={cn("", className)}
      >
        root page for - with navbars
      </div>
      <div
        onClick={() => {
          appToast.success(
            "Internal server error",
"An internal server error occurred. Please try again later."
          );
        }}
        className={cn("", className)}
      >
        root page for - with navbars
      </div>
      <div
        onClick={() => {
          appToast.withRedirectLink(
            "issue created",
            "click on the link to view the issue",
            "/issue/1"
          );
        }}
        className={cn("", className)}
      >
        root page for - with navbars
      </div>
    </div>
  );
}
