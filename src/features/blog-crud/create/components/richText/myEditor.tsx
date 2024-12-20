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

import { BookmarkComponent } from "./components.ts/bookmark-navigation";
import useDebouncedHeadings from "./hooks/useDebouncedHeadings";
import useHandleHashNavigation from "./hooks/useHandleHashNavigation";
import { assignNodeId } from "./utils/assignNodeId";
import { InitialTestContent } from "./utils/initial-test-content";

type SlateRichTextProps = ReadProps | WriteProps;

type ReadProps = {
  contentMode: "view";
  contentJSON: Descendant[];
};
type WriteProps = {
  contentMode: "edit";
  SaveContent: (contentJSON: Descendant[]) => void;
};

const SlateRichText = (props: SlateRichTextProps) => {
  const { contentMode } = props;
  let initialValue: Descendant[];
  if (contentMode === "view" && props.contentJSON) {
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
  const { headings, updateBookmarks } = useDebouncedHeadings(editor, 2000);//todo : no debounce on first render
  useHandleHashNavigation();

  return (
    <div className="">
      <Slate
        onChange={updateBookmarks}
        editor={editor}
        initialValue={initialValue}
      >
        <SetNodeToDecorations />
        {contentMode === "edit" ? (
          <ToolBar
            // className="fixed -mt-1 left-0 w-full   bg-white z-10"
            className="-mt-1  w-full   bg-white z-10"
            editor={editor}
            onSaveClick={props.SaveContent}
          />
        ) : null}
        <div className="flex gap-2 divide-x border">
          <div className="w-96 p-2">
            <p className="border mb-2  py-1  px-2 rounded-sm">index</p>
            <BookmarkComponent BookMarks={headings} />
          </div>
          <Editable
            readOnly={contentMode === "view"}
            //100vh-6.5rem - excluding height of navbar,toolbar
            className=" p-2 pl-4 outline-none text-gray-800 max-h-[calc(100vh-6.5rem)] overflow-x-auto"
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

// const Element = ({ attributes, children, element }: RenderElementProps) => {
//   let style: React.CSSProperties | undefined = {
//     textAlign: element.align,
//     fontSize: "19px",
//   };
//   const headingText = element.type.startsWith("heading")
//     ? children?.[0]?.props?.text?.text
//     : undefined;

//   const editor = useSlateStatic();
//   switch (element.type) {
//     case CodeBlockType:
//       const setLanguage = (language: string) => {
//         const path = ReactEditor.findPath(editor, element);
//         Transforms.setNodes(editor, { language }, { at: path });
//       };

//       return (
//         <div
//           {...attributes}
//           className="font-mono text-base leading-5 bg-gray-300 mt-0 border rounded-md bg-opacity-5 p-1.5 pl-3"
//           style={{ position: "relative" }}
//           spellCheck={false}
//         >
//           <LanguageSelect
//             value={element.language}
//             onChange={(e) => setLanguage(e.target.value)}
//           />
//           {children}
//         </div>
//       );
//     case CodeLineType:
//       return (
//         <div {...attributes} style={{ position: "relative" }}>
//           {children}
//         </div>
//       );

//     case "block-quote":
//       style = {
//         ...style,
//         textAlign: "left",
//         fontStyle: "italic",
//         borderLeft: "4px solid #ccc",
//         paddingLeft: "10px",
//       };
//       return (
//         <blockquote style={style} {...attributes}>
//           {children}
//         </blockquote>
//       );
//     case "bulleted-list":
//       return (
//         <ul style={style} {...attributes}>
//           {children}
//         </ul>
//       );
//     case "heading-one":
//       style = {
//         ...style,
//         fontWeight: "bold",
//         fontSize: "28px",
//       };
//       // if (!element.id && headingText) // sets id only first time - doesn't update
//       if (headingText) assignNodeId(editor, element, headingText);
//       return (
//         <h1 id={element.id} style={style} {...attributes}>
//           {children}
//         </h1>
//       );
//     case "heading-two":
//       if (headingText) assignNodeId(editor, element, headingText);
//       style = {
//         ...style,
//         fontWeight: "bold",
//         fontSize: "24px",
//       };
//       return (
//         <h2 id={element.id} style={style} {...attributes}>
//           {children}
//         </h2>
//       );
//     case "heading-three":
//       if (headingText) assignNodeId(editor, element, headingText);
//       style = {
//         ...style,
//         fontWeight: "bold",
//         fontSize: "20px",
//       };
//       return (
//         <h3 id={element.id} style={style} {...attributes}>
//           {children}
//         </h3>
//       );
//     case "list-item":
//       return (
//         <li style={style} {...attributes}>
//           {children}
//         </li>
//       );
//     case "numbered-list":
//       return (
//         <ol style={style} {...attributes}>
//           {children}
//         </ol>
//       );
//     default:
//       return (
//         <p style={style} {...attributes}>
//           {children}
//         </p>
//       );
//   }
// };

const Element = ({ attributes, children, element }: RenderElementProps) => {
  let style: React.CSSProperties | undefined = {
    textAlign: element.align,
  };
  const headingText = element.type.startsWith("heading")
    ? children?.[0]?.props?.text?.text
    : undefined;

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
      if (headingText) assignNodeId(editor, element, headingText);
      return (
        <h1
          id={element.id}
          style={style}
          {...attributes}
          className="text-4xl font-bold my-4 text-gray-900"
        >
          {children}
        </h1>
      );
    case "heading-two":
      if (headingText) assignNodeId(editor, element, headingText);
      return (
        <h2
          id={element.id}
          style={style}
          {...attributes}
          className="text-3xl font-bold my-3 text-gray-800"
        >
          {children}
        </h2>
      );
    case "heading-three":
      if (headingText) assignNodeId(editor, element, headingText);
      return (
        <h3
          id={element.id}
          style={style}
          {...attributes}
          className="text-2xl font-semibold my-2 text-gray-700"
        >
          {children}
        </h3>
      );
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
