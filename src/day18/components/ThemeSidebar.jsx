import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeSidebar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <aside
      className={`w-64 rounded-xl shadow-lg p-6 ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-yellow-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6">Sidebar</h1>

      <ul className="space-y-4">
        <li className="hover:text-blue-500 cursor-pointer transition">
          Home
        </li>

        <li className="hover:text-blue-500 cursor-pointer transition">
          About
        </li>

        <li className="hover:text-blue-500 cursor-pointer transition">
          Setting
        </li>
      </ul>
    </aside>
  );
};

export default ThemeSidebar;