import { Descendant } from "slate";
import { toCodeLines } from "../code-block/code-highlighting";
import { CodeBlockType } from "../constants";

export const InitialTestContent: Descendant[] = [
  {
    type: "heading-one",
    children: [{ text: "h1-nodejs- a js runtime environment" }],
    id:"very-unique-id"
  },
  {
    type: "heading-two",
    children: [{ text: "h2-fs module" }],
  },
  {
    type: "heading-three",
    children: [{ text: "h3-create a file in nextjs" }],
  },
  {
    type: "heading-two",
    children: [{ text: "h2-os module" }],
  },
  {
    type: "heading-two",
    children: [{ text: "h2-multi threading" }],
  },
  {
    type: "heading-three",
    children: [{ text: "h3-why multi threading is important" }],
  },
  {
    type: CodeBlockType,
    language: "jsx",
    children: toCodeLines(`// you can now write your own blog
const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }]
  }
]

const App = () => {
  const [editor] = useState(() => withReact(createEditor()))

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable />
    </Slate>
  )
}`),
  },
  {
    type: "paragraph",
    children: [
      { text: "This is editable " },
      { text: "rich", bold: true },
      { text: " text, " },
      { text: "much", italic: true },
      { text: " better than a " },
      { text: "<textarea>", code: true },
      { text: "!" },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: "bold", bold: true },
      {
        text: ", or add a semantically rendered block quote in the middle of the page, like this:",
      },
    ],
  },
  {
    type: "block-quote",
    children: [{ text: "A wise quote." }],
  },
  {
    type: "paragraph",
    align: "center",
    children: [{ text: "Try it out for yourself!" }],
  },
];
