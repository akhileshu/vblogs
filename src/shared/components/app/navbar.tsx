"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { CiBellOn } from "react-icons/ci";
import { ChangeEvent, useState } from "react";
import { HoverDropdown } from "./hover-dropdown";
import { Btn } from "./buttons";
import { AuthNavItem } from "@/features/Auth/components/auth-nav-item";
import Link from "next/link";

interface InputProps {
  className?: string;
}

export function Navbar({ className }: InputProps) {
  return (
    <div id="navbar" className={cn("flex  border-b-[1px]  justify-between ", className)}>
      <div className="flex gap-2 items-center ">
        <SidebarTrigger />
        <SearchBar />
        <Discover />
        <Link href={"blog/create/fill-metadata"}>
          <Btn text="create a blog" />
        </Link>

        <Notifications />
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

const categories = ["All", "Books", "Electronics", "Clothing", "Sports"];

function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [category, setCategory] = useState("All");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // For demo purposes, suggesting dummy data based on query
    if (value.length > 0) {
      setSuggestions([`${value} 1`, `${value} 2`, `${value} 3`]);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="flex items-center">
      {/* Category Dropdown */}
      <select
        className="p-1.5 border border-gray-300 rounded-l-md"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="p-1 border border-gray-300 rounded-r-md w-96"
          placeholder="Search..."
        />
        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded mt-1">
            {suggestions.map((suggestion, idx) => (
              <li
                key={idx}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setQuery(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
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
