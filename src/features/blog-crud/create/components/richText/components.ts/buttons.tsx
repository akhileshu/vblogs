import React from "react";
import { useSlate } from "slate-react";

import { cn } from "@/lib/utils";
import { isBlockActive } from "../utils/is-block-active";
import { toggleBlock } from "../utils/toggle-block";
import { isMarkActive } from "../utils/is-mark-active";
import { toggleMark } from "../utils/toggle-mark";
import { Mark, NodeType, TextAlignFormat } from "../types";
import { CodeBlockType, TEXT_ALIGN_TYPES } from "../constants";
import { toggleCodeBlock } from "../code-block/code-highlighting";

export const BlockButton = ({
  format,
  icon,
}: {
  format: NodeType | Mark | TextAlignFormat;
  icon: React.ReactElement;
}) => {
  const editor = useSlate();
  return (
    <SlateButton
      active={isBlockActive(
        editor,
        format as NodeType,
        TEXT_ALIGN_TYPES.includes(format as TextAlignFormat) ? "align" : "type"
      )}
      onMouseDown={(event) => {
        event.preventDefault();
        if (format === CodeBlockType) toggleCodeBlock(editor);
        else toggleBlock(editor, format);
      }}
    >
      {icon}
    </SlateButton>
  );
};

export const MarkButton = ({
  mark,
  icon,
}: {
  mark: Mark;
  icon: React.ReactElement;
}) => {
  const editor = useSlate();
  return (
    <SlateButton
      active={isMarkActive(editor, mark)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, mark);
      }}
    >
      {icon}
    </SlateButton>
  );
};

type ButtonProps = {
  active: boolean;
  reversed?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const SlateButton: React.FC<ButtonProps> = ({
  className,
  active,
  reversed,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        className,
        "cursor-pointer p-1 text-gray-800",
        {
          "": reversed && active,
          "": reversed && !active,
          " bg-gray-800 text-white rounded-sm": !reversed && active,
          "": !reversed && !active,
        }
      )}
    >
      {children}
    </button>
  );
};
