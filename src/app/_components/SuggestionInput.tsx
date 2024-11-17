// SuggestionInput.tsx
import React from "react";

interface SuggestionInputProps {
    query:string;
  placeholder: string;
  suggestions: string[];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSuggestionClick: (suggestion: string) => void;
}

const SuggestionInput: React.FC<SuggestionInputProps> = ({
  placeholder,
  suggestions,
  handleInputChange,
  onSuggestionClick,
  query
}) => {
  return (
    <div className="flex-1 space-y-2 relative">
      <input
        className="text-sm px-2 py-1 border-2 border-solid border-indigo-400 rounded-sm w-56"
        placeholder={placeholder}
        onChange={handleInputChange}
        type="text"
        value={query}
      />
      {suggestions.length > 0 && (
        <ul className="absolute w-full bg-white left-0 text-sm border-solid border-gray-200 border-[1px] rounded-sm">
          {suggestions.map((suggestion, idx) => (
            <li
              className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
              key={idx}
              onClick={() => onSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SuggestionInput;
