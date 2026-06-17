import { useState } from "react";

const Age = () => {
  const [age, setAge] = useState(18);

  const handleInc = () => {
    setAge((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center items-center hover:scale-105">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Age Increment</h1>
        <h1 className="text-6xl font-bold text-gray-800 mb-8">{age}</h1>
        <button onClick={handleInc} className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold transition">Increase Age</button>
      </div>
    </div>
  );
};

export default Age;