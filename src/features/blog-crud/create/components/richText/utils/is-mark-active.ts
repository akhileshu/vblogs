import { Editor } from "slate";
import { Mark } from "../types";

export const isMarkActive = (editor: Editor, mark: Mark) => {
  const marks = Editor.marks(editor);
  return marks ? marks[mark] === true : false;
};
