import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";
import "./Modes.css";

function Header() {
  const [isDarkMode, setIsDarkMode] = useContext(themeContext);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <main>
      <header
        className={`${
          isDarkMode ? "dark" : ""
        } h-14 sm:p-2 p-3 shadow shadow-gray-500 fixed w-full top-0 bg-white z-10`}
      >
        <div className="flex ml-2 justify-between items-center">
          <h1>
            <a
              href="./"
              className={`sm:text-2xl text-xl ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              <b>Where In The World?</b>
            </a>
          </h1>

          <button
            onClick={toggleTheme}
            title={isDarkMode ? "Light Mode" : "Dark Mode"}
          >
            <svg
              className={`sm:h-8 h-7 sm:w-8 w-7 ${
                isDarkMode ? "text-white" : "text-black"
              } active:text-gray-500 mr-4 mt-1`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isDarkMode ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
            {/* {isDarkMode ? "Light Mode" : "Dark Mode"} */}
          </button>
        </div>
      </header>
    </main>
  );
}

export default Header;
