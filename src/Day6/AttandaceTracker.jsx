import { useState } from "react";

const AttandaceTracker = () => {
  const [attandance, setAttandance] = useState(0);

  const handleaAttandance = () => {
    setAttandance((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center items-center hover:scale-105">
      <div className="bg-white shadow-lg rounded-xl p-8 w-80 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Attendance Tracker</h1>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Total Attendance: {attandance}</h2>
        <button onClick={handleaAttandance} className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold transition">Present</button>
      </div>
    </div>
  );
};

export default AttandaceTracker;