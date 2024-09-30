import React, { useContext } from "react";
import SelectMenu from "./SelectMenu";
import CountryList from "./CountryList";
import SearchBar from "./SearchBar";
import { useState } from "react";
import "./Modes.css";
import { themeContext } from "../contexts/ThemeContext";

function Home() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [isDarkMode] = useContext(themeContext);


  return (
    <>
      <main>
        <div
          className={`${isDarkMode ? "dark" : ""} ${
            isDarkMode ? "bg-[#171E2B]" : "white"
          } sm:flex sm:justify-between mb-9 relative top-12 pb-0 sm: p-7`}
        >
          <SearchBar setQuery={setQuery} />
          <SelectMenu setRegion={setRegion} />
        </div>
        <CountryList query={query} region={region} />
      </main>
    </>
  );
}

export default Home;
