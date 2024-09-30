import React, { useContext } from "react";
import "./Modes.css";
import { themeContext } from "../contexts/ThemeContext";
function SelectMenu({ setRegion }) {
  const [isDarkMode] = useContext(themeContext);
  return (
    <select
      name="SelectMenu"
      className={`${
        isDarkMode ? "dark" : ""
      } filter-list shadow-md shadow-gray-500 h-10`}
      onChange={(e) => setRegion(e.target.value)}
    >
      <option hidden>Filter by Region</option>
      <option value="Asia">Asia</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
      <option value="Antarctic">Antarctic</option>
    </select>
  );
}

export default SelectMenu;
