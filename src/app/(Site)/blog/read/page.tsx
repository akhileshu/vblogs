"use client";

import SlateRichText from "@/features/blog-crud/create/components/richText/myEditor";
import { content } from "../../../../../temp/json-content";

export default function page() {
  return (
    <div>
      <SlateRichText
        contentMode="view"
        contentJSON={content}
      />
    </div>
  );
}
