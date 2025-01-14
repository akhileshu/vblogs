"use client";
import React, { useCallback, useMemo } from "react";
import { createEditor, Descendant, Transforms } from "slate";
import { withHistory } from "slate-history";
import {
  Editable,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  useSlateStatic,
  withReact,
} from "slate-react";

import {
  LanguageSelect,
  prismThemeCss,
  SetNodeToDecorations,
  useDecorate,
} from "./code-block/code-highlighting";
import { ToolBar } from "./components.ts/formatting-toolbar";
import { CodeBlockType, CodeLineType } from "./constants";
import { onKeydownHandler } from "./utils/on-keydown-handler";

import { cn } from "@/lib/utils";
import { BookmarkComponent } from "./components.ts/bookmark-navigation";
import { RenderHeading } from "./components.ts/render-heading";
import useDebouncedHeadings from "./hooks/useDebouncedHeadings";
import useScrollToHash from "./hooks/useScrollToHash";
import { InitialTestContent } from "./utils/initial-test-content";

type SlateRichTextProps = ReadProps | CreateProps | EditProps;
type ReadProps = {
  contentMode: "read";
  contentJSON: Descendant[];
};
type EditProps = {
  contentMode: "edit";
  contentJSON: Descendant[];
  SaveContent: (contentJSON: Descendant[]) => void;
};
type CreateProps = {
  contentMode: "create";
  SaveContent: (contentJSON: Descendant[]) => void;
};

const SlateRichText = (props: SlateRichTextProps) => {
  const { contentMode } = props;
  const isWrite = contentMode === "edit" || contentMode === "create";
  const isRead = contentMode === "read";
  let initialValue: Descendant[];
  if ((contentMode === "read" || contentMode === "edit") && props.contentJSON) {
    initialValue = props.contentJSON;
  } else {
    initialValue = InitialTestContent;
  }
  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    []
  );
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const decorate = useDecorate(editor);
  const { headings, updateBookmarks } = useDebouncedHeadings(editor, 2000); //todo : no debounce on first render
  useScrollToHash();

  return (
    <div className="">
      <Slate
        onChange={updateBookmarks}
        editor={editor}
        initialValue={initialValue}
      >
        <SetNodeToDecorations />
        {isWrite ? (
          <ToolBar
            className="-mt-1  w-full   bg-white z-10"
            editor={editor}
            onSaveClick={props.SaveContent}
          />
        ) : null}
        <div
          className={cn("flex gap-2 divide-x border", {
            "-mt-1 border-t-0 h-[calc(100vh-3.5rem)]": isRead,
            "h-[calc(100vh-6.5rem)]": isWrite,
          })}
        >
          <div className="w-96 p-2 overflow-y-auto h-full">
            <p className="border mb-2  py-1  px-2 rounded-sm">index</p>
            <BookmarkComponent BookMarks={headings} />
          </div>
          <Editable
            readOnly={isRead}
            //100vh-6.5rem - excluding height of navbar,toolbar
            className={cn(
              "w-full overflow-y-auto overflow-x-hidden p-2 pl-4 outline-none text-gray-800 h-full  scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-indigo-100 scrollbar-thumb-rounded-full  scrollbar-hide-arrows"
            )}
            decorate={decorate}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Enter some rich text…"
            spellCheck
            autoFocus
            onKeyDown={(event) => onKeydownHandler(event, editor)}
          />
        </div>

        <style>{prismThemeCss}</style>
      </Slate>
    </div>
  );
};

const Element = ({ attributes, children, element }: RenderElementProps) => {
  let style: React.CSSProperties | undefined = {
    textAlign: element.align,
  };

  const editor = useSlateStatic();

  switch (element.type) {
    case CodeBlockType:
      const setLanguage = (language: string) => {
        const path = ReactEditor.findPath(editor, element);
        Transforms.setNodes(editor, { language }, { at: path });
      };

      return (
        <div
          {...attributes}
          className="font-mono text-sm  bg-opacity-5 bg-gray-200 border p-4 rounded-md relative"
          spellCheck={false}
        >
          <LanguageSelect
            value={element.language}
            onChange={(e) => setLanguage(e.target.value)}
            className="absolute top-1 right-1 text-xs border px-2 py-1 z-10 rounded-md outline-none"
          />
          {children}
        </div>
      );
    case CodeLineType:
      return (
        <div
          {...attributes}
          className="font-mono text-sm  pl-4"
          style={{ position: "relative" }}
        >
          {children}
        </div>
      );
    case "block-quote":
      style = {
        ...style,
        textAlign: "left",
        fontStyle: "italic",
      };
      return (
        <blockquote
          style={style}
          className="border-l-4 border-gray-400 pl-4 text-gray-600 italic my-4"
          {...attributes}
        >
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul
          {...attributes}
          className="list-disc list-inside pl-6 text-gray-700 leading-relaxed"
        >
          {children}
        </ul>
      );
    case "numbered-list":
      return (
        <ol
          {...attributes}
          className="list-decimal list-inside pl-6 text-gray-700 leading-relaxed"
        >
          {children}
        </ol>
      );
    case "list-item":
      return (
        <li {...attributes} className="my-1 text-gray-700 leading-snug">
          {children}
        </li>
      );
    case "heading-one":
    case "heading-two":
    case "heading-three":
      return RenderHeading({
        element,
        attributes,
        children,
        editor,
        style,
      });

    default:
      return (
        <p
          {...attributes}
          className="text-base leading-relaxed text-gray-800 my-2"
        >
          {children}
        </p>
      );
  }
};

const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { text, bold, code, italic, underline, ...rest } = leaf;
  if (bold) {
    children = <strong>{children}</strong>;
  }

  if (code) {
    children = <code>{children}</code>;
  }

  if (italic) {
    children = <em>{children}</em>;
  }

  if (underline) {
    children = <u>{children}</u>;
  }

  return (
    <span {...attributes} className={Object.keys(rest).join(" ")}>
      {children}
    </span>
  );
};

export default SlateRichText;
