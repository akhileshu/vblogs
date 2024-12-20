import { useCallback, useEffect, useRef, useState } from "react";
import { Editor } from "slate";
import { Bookmark, HeadingElement } from "../types";

type EditorChildren = {
  children: { text: string }[];
} & HeadingElement;

const useDebouncedHeadings = (editor: Editor, debounceTime: number = 2000) => {
  const [headings, setHeadings] = useState<Bookmark[]>([]);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateBookmarks = useCallback(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    } 

    debounceTimeoutRef.current = setTimeout(() => {
      const editorChildren = editor.children as EditorChildren[];
      const updatedHeadings = editorChildren
        .filter((node) => node.type.startsWith("heading"))
        .map((node) => {
          const title = node.children[0].text;
          const type = node.type;
          return { type, title, id: node.id };
        });

      if (
        updatedHeadings.length !== headings.length ||
        updatedHeadings.some(
          (heading, index) =>
            heading.type !== headings[index]?.type ||
            heading.title !== headings[index]?.title
        )
      ) {
        setHeadings(updatedHeadings);
      }
    }, debounceTime);
  }, [headings, editor.children, debounceTime]);

  useEffect(() => {
    updateBookmarks();
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [updateBookmarks]);

  return { headings, updateBookmarks };
};

export default useDebouncedHeadings;
