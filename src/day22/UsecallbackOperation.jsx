import { useCallback, useState } from "react";
import Child from "./Child";

const UsecallbackOperation = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  console.log("Parent Rendered");

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div
      className={ theme ? "min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center": "min-h-screen bg-sky-100 text-black flex flex-col items-center justify-center"} >
        <h1 className="text-3xl font-bold mb-6">useCallback Example</h1>

      <button onClick={() => setCount(count + 1)} className="bg-blue-600 text-white px-5 py-2 rounded mb-4">Count : {count}</button>

      <button onClick={() => setTheme(!theme)} className="bg-green-600 text-white px-5 py-2 rounded mb-6">Change Theme</button>

      <Child handleClick={handleClick} />
    </div>
  )
}

export default UsecallbackOperation;