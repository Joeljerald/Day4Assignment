import { useState } from "react";

const ArrayExample = () => {
  const [arrData, setArrData] = useState([
    "HTML",
    "CSS",
    "Javascript",
    "Node.js",
    "Express.js",
  ]);

  const handleAdd = () => {
    setArrData([...arrData, "React"]);
  };

  const handleUpdate = () => {
    setArrData(
      arrData.map((e) => (e === "HTML" ? "HTML'5" : e))
    );
  };

  return (
    <div className="min-h-screen bg-violet-300 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-blue-400 rounded-2xl shadow-xl p-8 text-center space-y-6 hover:scale-105 transition duration-300">
        <h1 className="text-4xl font-bold text-indigo-600">My Skills</h1>
        <ul className="space-y-3">
          {arrData.map((e, i) => (
            <li key={i} className="bg-violet-300 rounded-lg py-2 shadow-md font-semibold">{e}</li>
          ))}
        </ul>

        <div className="flex justify-center gap-4">
          <button onClick={handleAdd} className="px-4 py-2 rounded-lg bg-emerald-600 shadow-md font-semibold hover:shadow-lg transition duration-300">Add Skill </button>
          <button onClick={handleUpdate} className="px-4 py-2 rounded-lg bg-amber-500 shadow-md font-semibold hover:shadow-lg transition duration-300">
            Update Skill
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArrayExample;