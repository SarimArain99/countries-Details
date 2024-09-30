import React, { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";
function CountriesShimmer() {
  const [isDarkMode] = useContext(themeContext);
  return (
    <>
      <main
        className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mb-4 ${
          isDarkMode ? "bg-[#171E2B]" : ""
        }`}
      >
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className={`relative w-60 h-80 rounded-lg overflow-hidden sm:ml-2 ml-6 md:ml-3 mt-6 shadow-lg shadow-gray-500 hover:scale-105  ${
              isDarkMode ? "bg-gray-900" : "bg-gray-200"
            } animate-pulse `}
          >
            <div
              className={`h-36 w-60 ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
            <p className="font-bold bg-gray-500 h-8 w-52 m-5"></p>
            <p className="ml-2 bg-gray-400 h-5 w-56 mb-3"></p>
            <p className="ml-2 bg-gray-400 h-5 w-36 mb-3"></p>
            <p className="ml-2 bg-gray-400 h-5 w-44"></p>
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
        ))}
      </main>
    </>
  );
}

export default CountriesShimmer;
