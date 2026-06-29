import { useEffect, useState } from "react";

const DynamicPageTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Dynamic Page Title</h1>
        <div className="text-6xl font-bold text-blue-600 mb-6">
          {count}
        </div>
        <button onClick={() => setCount(count + 1)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">Increment</button>
        <p className="mt-6 text-gray-600"> Browser Tab: <span className="font-semibold">Count : {count}</span></p>
      </div>
    </div>
  );
};

export default DynamicPageTitle;