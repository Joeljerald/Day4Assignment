import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`shadow-md ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-yellow-100 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <h1 className="text-lg md:text-xl font-medium leading-relaxed">
          Theme Rendering using Context API allows multiple components to share
          the same theme without passing props manually. The Header, Sidebar,
          and Card consume the same Context and update together.
        </h1>

        <button
          onClick={toggleTheme}
          className={`px-5 py-2 rounded-lg font-semibold transition ${
            theme === "dark"
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Change Theme
        </button>
      </div>
    </header>
  );
};

export default ThemeHeader;