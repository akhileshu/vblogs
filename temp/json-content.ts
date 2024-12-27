import { Descendant } from "slate";

export const content: Descendant[] = [
  {
    type: "heading-one",
    children: [{ text: "h1-nodejs- a js runtime environment" }],
    id: "very-unique-id",
  },
  {
    type: "heading-two",
    children: [{ text: "h2-fs module" }],
    id: "very-unique-id",
  },
  {
    type: "heading-three",
    children: [{ text: "h3-create a file in nextjs" }],
    id: "very-unique-id",
  },
  {
    type: "heading-two",
    children: [{ text: "h2-os module" }],
    id: "very-unique-id",
  },
  {
    type: "heading-two",
    children: [{ text: "h2-multi threading" }],
    id: "very-unique-id",
  },
  {
    type: "heading-three",
    children: [{ text: "h3-why multi threading is important" }],
    id: "very-unique-id",
  },
  {
    type: "code-block",
    language: "jsx",
    children: [
      {
        type: "code-line",
        children: [
          {
            text: "// this is comming from database , you can only read , cant edit this.",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "const initialValue = [",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "  {",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "    type: 'paragraph',",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "    children: [{ text: 'A line of text in a paragraph.' }]",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "  }",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "]",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "const App = () => {",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "  const [editor] = useState(() => withReact(createEditor()))",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "  return (",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "    <Slate editor={editor} initialValue={initialValue}>",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "      <Editable />",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "    </Slate>",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "  )",
          },
        ],
      },
      {
        type: "code-line",
        children: [
          {
            text: "}",
          },
        ],
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "This is editable ",
      },
      {
        text: "rich",
        bold: true,
      },
      {
        text: " text, ",
      },
      {
        text: "much",
        italic: true,
      },
      {
        text: " better than a ",
      },
      {
        text: "<textarea>",
        code: true,
      },
      {
        text: "!",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text ",
      },
      {
        text: "bold",
        bold: true,
      },
      {
        text: ", or add a semantically rendered block quote in the middle of the page, like this:",
      },
    ],
  },
  {
    type: "block-quote",
    children: [
      {
        text: "A wise quote.",
      },
    ],
  },
  {
    type: "paragraph",
    align: "center",
    children: [
      {
        text: "Try it out for yourself!",
      },
    ],
  },
];