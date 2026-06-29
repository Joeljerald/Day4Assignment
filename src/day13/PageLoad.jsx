import { useEffect } from "react";

const PageLoad = () => {
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-96 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Page Load</h1>
        <div className="bg-green-100 text-green-700 text-xl font-semibold py-4 rounded-lg">
          Component Loaded
        </div>
      </div>
    </div>
  );
};

export default PageLoad;