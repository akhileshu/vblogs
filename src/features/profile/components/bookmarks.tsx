import React from "react";
import { cn } from "@/lib/utils";

type BookmarksProps = {
  className?: string;
};

const Bookmarks: React.FC<BookmarksProps> = ({className}) => {
  return (
    <div className={cn("",className)}>
      {/* Component JSX */}
      Bookmarks works!
    </div>
  );
};

export default Bookmarks;
