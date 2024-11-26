"use client";

import { cn } from "@/lib/utils";
import MyEditor from "./components/myEditor";
import { useSuggestions } from "@/app/hooks/useSuggestions";
import { ImagePlus } from "lucide-react";
import SuggestionInput from "@/components/app/SuggestionInput";

interface InputProps {
  className?: string;
}

export default function Input({ className }: InputProps) {
  return (
    <div className={cn("space-y-10 mt-3 border-solid", className)}>
      <div className="flex  gap-4 divide-solid">
        <SelectGoal />
        <SelectTechnology />
        <SelectTopic />
      </div>

      <input
        className="outline-none px-2 py-1 font-bold text-xl border-b-[1px] w-full"
        type="text"
        placeholder="My Blog Title.."
        name=""
        id=""
      />

      <div className="mx-auto my-4 bg-gray-100 max-w-md flex-col gap-3 flex-center py-6 rounded-md">
        <p>Add an Image/Gif</p>
        <ImagePlus size={30} />
      </div>
      {/* <div className="min-h-screen bg-gray-100">
        Editor Page
        <MyEditor />
      </div> */}
    </div>
  );
}

export function SelectGoal() {
  // todo:will auto fill goal,tech from authors profile
  const { handleInputChange, query, setQuery, suggestions, setSuggestions } =
    useSuggestions();
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
  };
  return (
    <div className="flex-1 space-y-2 relative">
      <p className="text-indigo-500 text-lg font-bold">Select a Goal</p>
      <SuggestionInput
        query={query}
        placeholder="Backend Development.."
        suggestions={suggestions}
        handleInputChange={handleInputChange}
        onSuggestionClick={handleSuggestionClick}
      />
    </div>
  );
}
export function SelectTechnology() {
  const { handleInputChange, query, setQuery, suggestions, setSuggestions } =
    useSuggestions();
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
  };
  return (
    <div className="flex-1 space-y-2">
      <p className="text-indigo-500 text-lg font-bold">Select a Technology</p>
      <SuggestionInput
        query={query}
        placeholder="Backend Development.."
        suggestions={suggestions}
        handleInputChange={handleInputChange}
        onSuggestionClick={handleSuggestionClick}
      />
    </div>
  );
}
export function SelectTopic() {
  const { handleInputChange, query, setQuery, suggestions, setSuggestions } =
    useSuggestions();
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
  };
  return (
    <div className="flex-1 space-y-2">
      <p className="text-indigo-500 text-lg font-bold">Select a Topic</p>
      <SuggestionInput
        query={query}
        placeholder="Backend Development.."
        suggestions={suggestions}
        handleInputChange={handleInputChange}
        onSuggestionClick={handleSuggestionClick}
      />
    </div>
  );
}
