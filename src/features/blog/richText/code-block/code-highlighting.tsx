import Prism from "prismjs";
import "prismjs/components/prism-java";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-php";
import "prismjs/components/prism-python";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";

import { useCallback } from "react";
import { Editor, Element, Node, NodeEntry, Range } from "slate";
import { useSlate } from "slate-react";
import { CodeBlockType, CodeLineType } from "../constants";
import { CodeBlockElement } from "../custom-types";
import {
  CodeBlockToParagraphs,
  paragraphsToCodeBlock,
} from "../utils/codeBlockToggle";
import { normalizeTokens } from "../utils/normalize-tokens";
import { isBlockActive } from "../utils/is-block-active";

//tood: bugs
/* 
formatting not working on code block , may be because each line is wrapped in div

*/

export const toggleCodeBlock = (editor: Editor) => {
  const isActive = isBlockActive(editor, CodeBlockType, "type");
  if (isActive) CodeBlockToParagraphs(editor);
  else paragraphsToCodeBlock(editor);
};

export const useDecorate = (editor: Editor) => {
  return useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([node, path]: [unknown, unknown]) => {
      if (Element.isElement(node) && node.type === CodeLineType) {
        const ranges = editor.nodeToDecorations?.get(node) || [];
        return ranges;
      }

      return [];
    },
    [editor.nodeToDecorations]
  );
};

const getChildNodeToDecorations = ([
  block,
  blockPath,
]: NodeEntry<CodeBlockElement>) => {
  const nodeToDecorations = new Map<Element, Range[]>();

  const text = block.children.map((line) => Node.string(line)).join("\n");
  const language = block.language;
  const tokens = Prism.tokenize(text, Prism.languages[language]);
  const normalizedTokens = normalizeTokens(tokens); // make tokens flat and grouped by line
  const blockChildren = block.children as Element[];

  for (let index = 0; index < normalizedTokens.length; index++) {
    const tokens = normalizedTokens[index];
    const element = blockChildren[index];

    if (!nodeToDecorations.has(element)) {
      nodeToDecorations.set(element, []);
    }

    let start = 0;
    for (const token of tokens) {
      const length = token.content.length;
      if (!length) {
        continue;
      }

      const end = start + length;

      const path = [...blockPath, index, 0];
      const range = {
        anchor: { path, offset: start },
        focus: { path, offset: end },
        token: true,
        ...Object.fromEntries(token.types.map((type) => [type, true])),
      };

      nodeToDecorations.get(element)!.push(range);

      start = end;
    }
  }

  return nodeToDecorations;
};

// precalculate editor.nodeToDecorations map to use it inside decorate function then
export const SetNodeToDecorations = () => {
  const editor = useSlate();

  const blockEntries = Array.from(
    Editor.nodes(editor, {
      at: [],
      mode: "highest",
      match: (n) => Element.isElement(n) && n.type === CodeBlockType,
    })
  );

  const nodeToDecorations = mergeMaps(
    ...blockEntries.map(getChildNodeToDecorations)
  );

  editor.nodeToDecorations = nodeToDecorations;

  return null;
};

export const LanguageSelect = (props: JSX.IntrinsicElements["select"]) => {
  return (
    <select
      data-test-id="language-select"
      contentEditable={false}
      className="absolute right-1 top-1 z-10 outline-none"
      {...props}
    >
      <option value="css">CSS</option>
      <option value="html">HTML</option>
      <option value="java">Java</option>
      <option value="javascript">JavaScript</option>
      <option value="jsx">JSX</option>
      <option value="markdown">Markdown</option>
      <option value="php">PHP</option>
      <option value="python">Python</option>
      <option value="sql">SQL</option>
      <option value="tsx">TSX</option>
      <option value="typescript">TypeScript</option>
    </select>
  );
};

const mergeMaps = <K, V>(...maps: Map<K, V>[]) => {
  const map = new Map<K, V>();

  for (const m of maps) {
    for (const item of m) {
      map.set(...item);
    }
  }

  return map;
};

const toChildren = (content: string) => [{ text: content }];
export const toCodeLines = (content: string): Element[] =>
  content
    .split("\n")
    .map((line) => ({ type: CodeLineType, children: toChildren(line) }));

// Prismjs theme stored as a string instead of emotion css function.
// It is useful for copy/pasting different themes. Also lets keeping simpler Leaf implementation
// In the real project better to use just css file
export const prismThemeCss = `
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*="language-"],
pre[class*="language-"] {
    color: black;
    background: none;
    text-shadow: 0 1px white;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: #b3d4fc;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
    text-shadow: none;
    background: #b3d4fc;
}

@media print {
    code[class*="language-"],
    pre[class*="language-"] {
        text-shadow: none;
    }
}

/* Code blocks */
pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
    background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
    color: slategray;
}

.token.punctuation {
    color: #999;
}

.token.namespace {
    opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
    color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
    color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
    color: #9a6e3a;
    /* This background color was intended by the author of this theme. */
    background: hsla(0, 0%, 100%, .5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
    color: #07a;
}

.token.function,
.token.class-name {
    color: #DD4A68;
}

.token.regex,
.token.important,
.token.variable {
    color: #e90;
}

.token.important,
.token.bold {
    font-weight: bold;
}
.token.italic {
    font-style: italic;
}

.token.entity {
    cursor: help;
}
`;
