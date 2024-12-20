export const ParagraphType = "paragraph";
export const CodeBlockType = "code-block";
export const CodeLineType = "code-line";

export const LIST_TYPES = ["numbered-list", "bulleted-list"] as const;

export const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"] as const;

export type ContentMode = "edit" | "view";

export const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
} as const;
