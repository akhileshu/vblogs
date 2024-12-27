import { Descendant, Editor } from "slate";

import { cn } from "@/lib/utils";
import { Btn } from "@/shared/components/buttons";
import { FaCode } from "react-icons/fa6";
import { LuHeading1, LuHeading2 } from "react-icons/lu";
import {
  MdCode,
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatUnderlined,
} from "react-icons/md";
import { BlockButton, MarkButton } from "./buttons";

export const ToolBar = ({
  onSaveClick,
  editor,
  className,
}: {
  onSaveClick: (contentJSON: Descendant[]) => void;
  editor: Editor;
  className?: string;
}) => {
  return (
    <div className={cn("flex-center gap-2 p-2", className)} id="editor-toolbar">
      <Btn
        type="submit"
        onClick={() => onSaveClick(editor.children)}
        text="save blog"
      />
      <div className="text-xl space-x-2 divide-x-2 ">
        <span>
          <MarkButton mark="bold" icon={<MdFormatBold />} />
          <MarkButton mark="italic" icon={<MdFormatItalic />} />
          <MarkButton mark="underline" icon={<MdFormatUnderlined />} />
          <MarkButton mark="code" icon={<MdCode />} />
        </span>

        <span className="pl-2">
          <BlockButton format="heading-one" icon={<LuHeading1 />} />
          <BlockButton format="heading-two" icon={<LuHeading2 />} />
          <BlockButton format="block-quote" icon={<MdFormatQuote />} />
          <BlockButton format="numbered-list" icon={<MdFormatListNumbered />} />
          <BlockButton format="bulleted-list" icon={<MdFormatListBulleted />} />
          <BlockButton format="left" icon={<MdFormatAlignLeft />} />
          <BlockButton format="center" icon={<MdFormatAlignCenter />} />
          <BlockButton format="right" icon={<MdFormatAlignRight />} />
          <BlockButton format="justify" icon={<MdFormatAlignJustify />} />
          <BlockButton format="code-block" icon={<FaCode />} />
        </span>
      </div>
    </div>
  );
};
