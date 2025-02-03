"use client";
import { cn } from "@/lib/utils";
import { AppLink } from "@/shared/components/standard-components";
import { usePathname } from "next/navigation";
import React from "react";

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

const ProfileSidebarNavigation: React.FC<ProfileInnerSidebarProps> = ({
  className,
}) => {
  const pathname = usePathname();

  return (
    <ul className={cn("flex flex-col", className)}>
      {links.map(({ href, label }, index) => (
        <li key={index}>
          <AppLink
            isActive={pathname === href}
            className="block px-3 py-2"
            href={href}
          >
            {label}
          </AppLink>
        </li>
      ))}
    </ul>
  );
};

export default ProfileSidebarNavigation;
