import { useState } from "react";

const EmployeeStatus = () => {
  const [status, setStatus] = useState(false);

  const handleStatus = () => {
    setStatus((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center hover:scale-105">
      <div className="bg-white shadow-lg rounded-xl p-8 w-80 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Employee Status</h1>
        <h2 className={`text-3xl font-bold mb-6 ${status ? "text-green-600" : "text-red-600"}`}>{status ? "Active" : "Inactive"}</h2>
        <button onClick={handleStatus} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold transition">Toggle Status</button>
      </div>
    </div>
  );
};

export default EmployeeStatus;