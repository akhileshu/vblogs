"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

type ProfileInnerSidebarProps = {
  className?: string;
};

const links = [
  { href: "/profile", label: "profile" },
  { href: "/profile/interests", label: "my interests" },
  { href: "/profile/owned-blog-playlists", label: "owned Playlists" },
  {
    href: "/profile/following-blog-playlists",
    label: "following Playlists",
  },
];

const ProfileInnerSidebar: React.FC<ProfileInnerSidebarProps> = ({
  className,
}) => {
  const pathname = usePathname();

  return (
    <ul className={cn("flex flex-col", className)}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn("", {
              "text-blue-500": pathname === link.href,
            })}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProfileInnerSidebar;
