import { useState } from "react";

const ThemeChange = () => {
  const [themeChange, setThemeChange] = useState(false);

  const handleTheme = () => {
    setThemeChange((prev) => !prev);
  };

  return (
    <div className={`flex justify-center items-center hover:scale-105 ${themeChange ? "bg-black" : "bg-gray-100"}`}>
      <div className="bg-white shadow-lg rounded-xl p-8 w-80 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Theme Switch</h1>
        <h2 className="text-2xl font-semibold mb-6"> {themeChange ? "Dark Mode" : "Light Mode"}</h2>
        <button onClick={handleTheme} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold transition">Toggle Theme</button>

        </div>
         </div>
  );
};

export default ThemeChange;