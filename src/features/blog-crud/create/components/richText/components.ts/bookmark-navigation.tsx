import Link from "next/link";
import { Bookmark } from "../types";

export const BookmarkComponent = ({ BookMarks }:{BookMarks:Bookmark[]}) => {
  const getStyles = (type:string) => {
    switch (type) {
      case "heading-one":
        return { paddingLeft: "0px", fontSize: "18px" };
      case "heading-two":
        return { paddingLeft: "10px", fontSize: "16px" };
      case "heading-three":
        return { paddingLeft: "20px", fontSize: "14px" };
      default:
        return {};
    }
  };

  return (
    <div className="text-indigo-700 space-y-2">
      {BookMarks.map((bookmark) => (
        <Link
          className="block"
          href={`#${bookmark.id}`}
          key={bookmark.id}
          style={getStyles(bookmark.type)}
        >
          {bookmark.title}
        </Link>
      ))}
    </div>
  );
};