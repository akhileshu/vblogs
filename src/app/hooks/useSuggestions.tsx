"use client";

import { useState, ChangeEvent } from "react";

// Custom Hook for handling input and generating suggestions
export const useSuggestions = () => {
  //todo: take the callback of fetching suggestions from db and update it on query change

  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Generate dummy suggestions based on query for demo purposes
    if (value.length > 0) {
      setSuggestions([`${value} 1`, `${value} 2`, `${value} 3`]);
    } else {
      setSuggestions([]);
    }
  };

  return {
    query,
    suggestions,
    handleInputChange,
    setQuery, // Expose setQuery if needed for external handling
    setSuggestions,
  };
};
