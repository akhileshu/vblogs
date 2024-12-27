import { Editor } from "slate";
import { isMarkActive } from "./is-mark-active";
import { Mark } from "../types";

export const toggleMark = (editor: Editor, mark: Mark) => {
  const isActive = isMarkActive(editor, mark);

  if (isActive) {
    Editor.removeMark(editor, mark);
  } else {
    Editor.addMark(editor, mark, true);
  }
};
