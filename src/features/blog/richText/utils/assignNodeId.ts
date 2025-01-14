import { Editor, Transforms } from "slate";
import { ReactEditor } from "slate-react";
import { HeadingElement } from "../types";
import { generateSlugFromText } from "./generateSlugFromText";

export const assignNodeId = (
  editor: Editor,
  element: HeadingElement,
  text: string
) => {
  const path = ReactEditor.findPath(editor, element as never);
  const id = generateSlugFromText(text);
  Transforms.setNodes(editor, { id }, { at: path });
};
