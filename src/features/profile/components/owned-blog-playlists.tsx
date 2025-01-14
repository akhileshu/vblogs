import React from "react";
import { cn } from "@/lib/utils";

type OwnedBlogPlaylistsProps = {
  className?: string;
};

const OwnedBlogPlaylists: React.FC<OwnedBlogPlaylistsProps> = ({className}) => {
  return (
    <div className={cn("",className)}>
      {/* Component JSX */}
      OwnedBlogPlaylists works!
    </div>
  );
};

export default OwnedBlogPlaylists;
