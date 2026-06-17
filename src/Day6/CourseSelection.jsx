import { useState } from "react";

const CourseSelection = () => {
  const [course, setCourse] = useState("MERN");

  const handleIncrement = () => {
    setCourse(course=="MERN"?"React Native ":"MERN");
  };

  return (
    <div className="flex justify-center items-center hover:scale-105">
      <div className="bg-white shadow-lg rounded-xl p-8 w-80 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Course Selection</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{course}</h2>
        <button onClick={handleIncrement} className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg font-semibold transition">Change Course
        </button>
      </div>
    </div>
  );
};

export default CourseSelection;