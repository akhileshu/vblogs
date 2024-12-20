import { Element, Transforms } from "slate";
import { CustomEditor } from "../custom-types";
import { CodeBlockType, CodeLineType, ParagraphType } from "../constants";

const wrapParagraphsInCodeBlock = (editor: CustomEditor) => {
  Transforms.wrapNodes(
    editor,
    { type: CodeBlockType, language: "html", children: [] },
    {
      match: (n) => Element.isElement(n) && n.type === ParagraphType,
      split: true,
    }
  );
};

const setSelectedParagraphsAsCodeBlockChildren = (editor: CustomEditor) => {
  Transforms.setNodes(
    editor,
    // @ts-expect-error: TypeScript expects 'type' to be 'paragraph', but we're assigning 'code-line'
    { type: CodeLineType },
    {
      match: (n) => Element.isElement(n) && n.type === ParagraphType,
    }
  );
};

export const paragraphsToCodeBlock = (editor: CustomEditor) => {
  wrapParagraphsInCodeBlock(editor);
  setSelectedParagraphsAsCodeBlockChildren(editor);
};

export const CodeBlockToParagraphs = (editor: CustomEditor) => {
  Transforms.unwrapNodes(editor, {
    match: (n) => Element.isElement(n) && n.type === CodeBlockType,
    split: true,
  });
  Transforms.setNodes(editor, { type: "paragraph" });
};
