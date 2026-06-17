import { useState } from "react";

const ArrayOfObject = () => {
  const [students] = useState([
    {
      id: 1,
      name: "Joel",
      age: 22,
    },
    {
      id: 2,
      name: "Godson",
      age: 20,
    },
    {
      id: 3,
      name: "Darvin",
      age: 21,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-10">Array of Objects</h1>
      <div className="w-full max-w-md space-y-5 mb-80">
        {students.map((student) => (
          <div key={student.id} className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300 ">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Student {student.id}</h3>
            <p className="text-gray-700"><span className="font-bold">ID:</span> {student.id}</p>
            <p className="text-gray-700"><span className="font-bold">Name:</span> {student.name}</p>
            <p className="text-gray-700"><span className="font-bold">Age:</span> {student.age}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ArrayOfObject;