import React from "react";
import { cn } from "@/lib/utils";

type BlogReadHistoryProps = {
  className?: string;
};

const BlogReadHistory: React.FC<BlogReadHistoryProps> = ({className}) => {
  return (
    <div className={cn("",className)}>
      {/* Component JSX */}
      BlogReadHistory works!
    </div>
  );
};

export default BlogReadHistory;
