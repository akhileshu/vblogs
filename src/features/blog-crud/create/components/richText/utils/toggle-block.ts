import { Editor, Element, Transforms } from "slate";
import {
  ListFormat,
  Mark,
  NodeType,
  SlateElementKeyAsBlockType,
  TextAlignFormat,
} from "../types";
import { isBlockActive } from "./is-block-active";
import { LIST_TYPES, TEXT_ALIGN_TYPES } from "../constants";

type FormatType =
  | TextAlignFormat
  | ListFormat
  | SlateElementKeyAsBlockType
  | NodeType
  | Mark;
export const toggleBlock = (editor: Editor, format: FormatType) => {
  const isActive = isBlockActive(
    editor,
    format as NodeType,
    TEXT_ALIGN_TYPES.includes(format as TextAlignFormat) ? "align" : "type"
  );
  const isList = LIST_TYPES.includes(format as ListFormat);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      Element.isElement(n) &&
      LIST_TYPES.includes(n.type as ListFormat) &&
      !TEXT_ALIGN_TYPES.includes(format as TextAlignFormat),
    split: true,
  });
  let newProperties: Partial<Element>;
  if (TEXT_ALIGN_TYPES.includes(format as TextAlignFormat)) {
    newProperties = {
      align: isActive ? undefined : (format as TextAlignFormat),
    };
  } else {
    newProperties = {
      type: isActive
        ? "paragraph"
        : isList
        ? "list-item"
        : (format as NodeType),
    };
  }

  Transforms.setNodes<Element>(editor, newProperties);

  if (!isActive && isList) {
    const block = {
      type: format as NodeType,
      children: [],
    };
    Transforms.wrapNodes(editor, block as Element);
  }
};
