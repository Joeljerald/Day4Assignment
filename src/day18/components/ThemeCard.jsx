import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeCard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`shadow-md p-10 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-yellow-100 text-black"
      }`}
    >
      <h2 className="text-3xl font-bold mb-4">
        Card Component
      </h2>

      <p className="text-lg leading-relaxed">
        This card is consuming the same theme using Context API.
        When the theme changes from the Header, the Sidebar and
        Card automatically update because they all consume the
        same Context.
      </p>
    </div>
  );
};

export default ThemeCard;