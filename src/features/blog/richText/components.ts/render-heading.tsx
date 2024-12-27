import { Editor } from "slate";
import { RenderElementProps } from "slate-react";
import { assignNodeId } from "../utils/assignNodeId";
import { HeadingElement } from "../types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoIosLink, IoMdLink } from "react-icons/io";
import { copyToClipboard } from "@/shared/utils/copy-to-clipboard";

interface HeadingProps {
  element: HeadingElement;
  attributes: RenderElementProps["attributes"];
  children: React.ReactNode;
  editor: Editor;
  style: React.CSSProperties;
}

export const RenderHeading = ({
  element,
  attributes,
  children,
  editor,
  style,
}: HeadingProps): JSX.Element => {
  const type = element.type;
    const headingText = element.type.startsWith("heading")
      ? children?.[0]?.props?.text?.text
      : undefined;
  if (headingText) assignNodeId(editor, element, headingText);

  const headingProps = {
    id: element.id,
    style,
    ...attributes,
  };


  const HeadingTag =
    type === "heading-one" ? "h1" : type === "heading-two" ? "h2" : "h3";

  return (
    <div className={"flex items-center gap-2"}>
      <HeadingTag
        {...headingProps}
        className={cn("", {
          "text-4xl font-bold my-4 text-gray-900":type==="heading-one",
         "text-3xl font-bold my-3 text-gray-800": type==="heading-two",
         "text-2xl font-semibold my-2 text-gray-700":type==="heading-three",
        })}
      >
        {children}
      </HeadingTag>
      <HeadingLinkAndCopy className="flex items-center gap-2" id={element.id} />
    </div>
  );
};

const HeadingLinkAndCopy = ({
  id,
  className,
}: {
  id: string;
  className?: string;
}) => {
  return (
    <div className={cn(className)}>
      <Link className="text-gray-400 " href={`#${id}`}>
        <IoMdLink />
      </Link>
      <IoIosLink
        onClick={() => {
          copyToClipboard(`http://localhost:3000/blog/create#${id}`);
        }}
        className="text-gray-400"
      />
    </div>
  );
};
