import { useRef } from "react";

const ButtonDisplay = () => {
  const inputRef = useRef(null);
  const displayRef = useRef(null);

  const handleClick = () => {
    displayRef.current.innerText = inputRef.current.value;
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Task 4
        </h1>

        <input
          type="text"
          placeholder="Enter Text"
          ref={inputRef}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={handleClick}
          className="w-full mt-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Show
        </button>

        <div className="mt-6 bg-gray-100 rounded-lg p-4 min-h-17.5 flex items-center justify-center">
          <h2
            ref={displayRef}
            className="text-xl font-semibold text-gray-800"
          ></h2>
        </div>
      </div>
    </div>
  );
};

export default ButtonDisplay;