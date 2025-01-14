import isHotkey from "is-hotkey";
import { Editor, Element, Node, Transforms } from "slate";
import { HOTKEYS } from "../constants";
import { NodeType } from "../types";
import { toggleMark } from "./toggle-mark";

export const onKeydownHandler = (
  event: React.KeyboardEvent<HTMLDivElement>,
  editor: Editor
) => {
  if (handleShortcut(event, editor)) return;
  for (const hotkey in HOTKEYS) {
    if (isHotkey(hotkey, event)) {
      event.preventDefault(); // bug : preventing on backspace , todo: need to investigate , this should not happen
      const mark = HOTKEYS[hotkey as keyof typeof HOTKEYS];
      toggleMark(editor, mark);
      return;
    }
  }
};

function handleShortcut(
  event: React.KeyboardEvent<HTMLDivElement>,
  editor: Editor
) {
  for (const hotkey in SHORTCUTS) {
    if (isHotkey(hotkey, event)) {
      event.preventDefault();
      SHORTCUTS[hotkey](editor);
      return true;
    }
  }
  return false;
}

const SHORTCUTS: Record<string, (editor: Editor) => void> = {
  tab: (editor) => {
    Editor.insertText(editor, "  ");
  },
  "ctrl+delete": deleteNonDeletableElements,
  "ctrl+alt+p": transformSelectedToParagraphsAndClearFormatting,
  "shift+enter": insertParagraphInNextLine,
  // "ctrl+a": (editor: Editor) => {
  //   const isCodeBlock = isBlockActive(editor, CodeBlockType, "type");
  //   if (isCodeBlock) SelectWithinCodeBlock(editor);
  // },
  // Add more shortcuts here...
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SelectWithinCodeBlock(editor: Editor) {
  //todo
}

const isSlateElement = (node: Node) => {
  return !Editor.isEditor(node) && Element.isElement(node);
};

const matchSlateElementTypes = (node: Node, matchTypes: NodeType[]) => {
  return matchTypes.some(
    (type) => Element.isElement(node) && node.type === type
  );
};

function transformSelectedToParagraphsAndClearFormatting(editor: Editor) {
  if (!editor.selection) return;

  Transforms.setNodes(
    editor,
    { type: "paragraph", align: undefined },
    {
      at: Editor.unhangRange(editor, editor.selection),
      match: (n) => isSlateElement(n),
    }
  );
  Transforms.unsetNodes(editor, ["bold", "italic", "underline", "code"], {
    at: Editor.unhangRange(editor, editor.selection),
    match: (n) => isSlateElement(n), //bug : isSlateElement is always failing , Element.isElement is not a function
  });
}

function deleteNonDeletableElements(editor: Editor) {
  //bug : its deleting more than whats selected
  if (!editor.selection) return;
  const matches = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, editor.selection),
      match: (n) =>
        isSlateElement(n) &&
        matchSlateElementTypes(n, ["code-block", "block-quote"]),
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [node, path] of matches) {
    Transforms.removeNodes(editor, { at: path }); // bug : doesn't delete all matches
  }
}

function insertParagraphInNextLine(editor: Editor) {
  if (!editor.selection) return;
  Transforms.insertNodes(editor, {
    type: "paragraph",
    children: [{ text: "" }],
  });
}
