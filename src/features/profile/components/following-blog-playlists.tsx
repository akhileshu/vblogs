import React from "react";
import { cn } from "@/lib/utils";

type FollowingBlogPlaylistsProps = {
  className?: string;
};

const FollowingBlogPlaylists: React.FC<FollowingBlogPlaylistsProps> = ({className}) => {
  return (
    <div className={cn("",className)}>
      {/* Component JSX */}
      FollowingBlogPlaylists works!
    </div>
  );
};

export default FollowingBlogPlaylists;
