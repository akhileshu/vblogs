/* @ts-nocheck */
/* eslint-disable */
"use client";

import { useState } from "react";

// Import the Slate editor factory.

import { createEditor } from "slate";

// Import the Slate components and React plugin.

import { Slate, Editable, withReact } from "slate-react";

//For TypeScript

import { BaseEditor } from "slate";

import { ReactEditor } from "slate-react";

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;

    Element: CustomElement;

    Text: CustomText;
  }
}

type CustomElement = { type: "paragraph"; children: CustomText[] };

type CustomText = { text: string };

const initialValue: CustomElement[] = [
  {
    type: "paragraph",

    children: [{ text: "A line of text in a paragraph." }],
  },
];

const MyEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const handleSave = (value:unknown) => {
    console.log(JSON.stringify(value, null, 2)); // Log the editor's value in a readable format
  };

  return (
    <Slate
      editor={editor}
      onValueChange={(e) => handleSave(e)}
      initialValue={initialValue}
    >
      <Editable />
    </Slate>
  );
};

export default MyEditor;
