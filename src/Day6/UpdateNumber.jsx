import { useState } from "react";

const UpdateNumber = () => {
  const [number, setNumber] = useState(null);

  const handleUpdate = () => {
    setNumber(9876543210);
  };

  return (
    <div className="flex justify-center items-center hover:scale-105">
      <div className="bg-white shadow-lg rounded-xl p-8 w-80 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Mobile Number</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{number ?? "No number loaded"}</h2>
        <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold transition">Update Contact Number</button>
      </div>
    </div>
  );
};

export default UpdateNumber;