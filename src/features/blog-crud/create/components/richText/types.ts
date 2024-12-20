import { Element } from "slate";
import { LIST_TYPES, TEXT_ALIGN_TYPES } from "./constants";
import { CustomElement, CustomText, HeadingOneElement, HeadingThreeElement, HeadingTwoElement } from "./custom-types";

export type TextAlignFormat = (typeof TEXT_ALIGN_TYPES)[number]; // "left" | "center" | "right" | "justify"

export type ListFormat = (typeof LIST_TYPES)[number]; // "numbered-list" | "bulleted-list"

export type SlateElementKeyAsBlockType = keyof CustomElement | "align"; // "type" | "align" | "children"

export type Mark = keyof Omit<CustomText, "text">; //(e.g., bold, italic, etc.)

export type NodeType = Extract<Element, { type: unknown }>["type"]; //"title" | "link" | "button"....

export type Bookmark = {
  type: string; 
  title: string;
  id: string;
};

export type HeadingElement=HeadingOneElement|HeadingTwoElement|HeadingThreeElement
