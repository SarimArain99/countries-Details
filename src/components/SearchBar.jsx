import React, { useContext } from "react";
import "./Modes.css";
import { themeContext } from "../contexts/ThemeContext";

function SearchBar({ setQuery }) {
  const [isDarkMode] = useContext(themeContext)

  return (
    <main
      className={` ${
        isDarkMode ? "dark" : ""
      } search-bar shadow-md shadow-gray-500 h-10`}
    >
      <svg
        className="h-5 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <input
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search For a Country"
      />
    </main>
  );
}

export default SearchBar;
