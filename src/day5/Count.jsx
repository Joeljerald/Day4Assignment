import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  const handleDec = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const handleRes = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex justify-center items-center  bg-gray-100 ">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 mb-50 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Counter Program</h1>
        <h1 className="text-6xl font-bold text-gray-800 mb-8">{count}</h1>
        <div className="flex justify-center gap-4">
        <button onClick={handleInc} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition">Increment</button>
        <button onClick={handleDec} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition">Decrement</button>
        <button onClick={handleRes} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Count;