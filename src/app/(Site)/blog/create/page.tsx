"use client"

import SlateRichText from "@/features/blog-crud/create/components/richText/myEditor";

export default function page(){
  return (
    <div>
      <SlateRichText contentMode="edit" SaveContent={(contentJSON) => {
        // save json / stringify and save
        alert("saving blog in db" + JSON.stringify(contentJSON));
      }} />
    </div>
  );
}