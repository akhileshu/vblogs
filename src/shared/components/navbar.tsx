"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AuthNavItem } from "@/features/Auth/components/auth-nav-item";
import { DropdownProvider } from "@/features/hierarchical-dropdowns";
import { cn } from "@/lib/utils";
import { CiBellOn } from "react-icons/ci";
import { getUrl } from "../lib/get-url";
import { HoverDropdown } from "./hover-dropdown";
import SearchBlogs from "./search-blogs";
import { AppLink } from "./standard-components";

interface InputProps {
  className?: string;
}

export function Navbar({ className }: InputProps) {
  return (
    <div
      id="navbar"
      className={cn("flex  border-b-[1px]  justify-between ", className)}
    >
      <div className="flex gap-2 items-center ">
        <SidebarTrigger />
        <DropdownProvider>
          <SearchBlogs />
        </DropdownProvider>
        <Discover />
        <AppLink href={getUrl("blogFillMetadata")}>
          create a blog
        </AppLink>
        <Notifications />
        <AppLink href={"/dashboard"}>dashboard</AppLink>
      </div>

      <div className="flex gap-2 items-center">
        <AuthNavItem />
      </div>
    </div>
  );
}

function Notifications() {
  return (
    <div className="relative">
      <CiBellOn size={30} />
      <div className="absolute min-w-6 min-h-6 text-center -top-2 -right-2 bg-red-400 rounded-full p-[2px] px-1 text-white text-sm font-bold">
        11
      </div>
    </div>
  );
}

function Discover() {
  const mylist = [
    "Web Development",
    "Development",
    " experimental",
    "Web Development",
    "Development",
    " experimental",
    "Web Development",
    "Development",
    " experimental",
  ];

  return (
    <HoverDropdown trigger="Discover">
      <ul className="min-w-56 p-2 text-sm space-y-1">
        {mylist.map((item, index) => {
          return (
            <li className="" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </HoverDropdown>
  );
}
