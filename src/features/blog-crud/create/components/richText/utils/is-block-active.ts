import { Editor, Element } from "slate";
import { SlateElementKeyAsBlockType, NodeType } from "../types";

export const isBlockActive = (
  editor: Editor,
  format: NodeType,
  blockType: SlateElementKeyAsBlockType = "type"
) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) && Element.isElement(n) && n[blockType] === format,
    })
  );

  return !!match;
};
