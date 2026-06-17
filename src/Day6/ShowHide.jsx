import { useState } from "react";

const ShowHide = () => {
  const [para, setPara] = useState(true);

  const handleHide = () => {
    setPara((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center hover:scale-105">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Show / Hide Content</h1>
        {para && (
          <p className="text-gray-700 mb-6">This paragraph is shown and hidden.</p>
        )}

        <button onClick={handleHide} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold transition">{para ? "Hide" : "Show"}</button>

      </div>

    </div>
  );
};

export default ShowHide;