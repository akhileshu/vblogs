"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { CiBellOn } from "react-icons/ci";

interface InputProps {
  className?: string;
}

export function Navbar({ className }: InputProps) {
  return (
    <div className={cn("flex  border-b-[1px]  justify-between", className)}>
      <div className="flex gap-2 items-center">
        <SidebarTrigger />
        <SearchBar />
        <Discover />
        <Btn text="create a blog" />
        <Notifications />
      </div>

      <div className="flex gap-2 items-center">
        <Btn text="login" variant="outline" />
        <Btn text="signup" />
        <Account />
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

function Account() {
  return (
    <Image
      src={
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww"
      }
      width={40}
      height={40}
      alt=""
      className="object-cover aspect-square rounded-full border-2 border-indigo-500 border-solid"
    />
  );
}

import { ChangeEvent, useState } from "react";
import { HoverDropdown } from "../_sharedComponents/hover-dropdown";
import { Btn } from "./all";
import Image from "next/image";

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
