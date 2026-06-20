import { useState } from "react";

const Student = () => {
  const [student, setStudent] = useState({
    name: "Joel",
    age: 22,
    city: "Chennai",
    skills: ["HTML", "CSS", "JavaScript"],
  });

  const addSkill = () => {
    setStudent({
      ...student,
      skills: [...student.skills, "React"],
    });
  };

  const changeCity = () => {
    setStudent({
      ...student,
      city: "Bangalore",
    });
  };

  return (
    <div className="min-h-screen bg-violet-300 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-blue-400 rounded-2xl shadow-xl p-8 space-y-5 text-center hover:scale-105 transition ">
        <h2 className="text-4xl font-bold text-indigo-600">Student Details</h2>
        <div className="space-y-3 text-lg">
          <p><span className="font-semibold text-slate-800">Name:</span><span className="ml-2 text-blue-600 font-bold">{student.name}</span></p>
          <p><span className="font-semibold text-slate-800">Age:</span><span className="ml-2 text-blue-600 font-bold">{student.age}</span></p>
          <p><span className="font-semibold text-slate-800">City:</span><span className="ml-2 text-blue-600 font-bold">{student.city}</span></p>
        </div>

        <div>
          <h3 className="text-slate-800 font-semibold text-xl mb-3">Skills</h3>
          <ul className="flex  justify-center gap-3">
            {student.skills.map((e, i) => (
          <li key={i} className="px-4 py-2 rounded-lg bg-violet-300 shadow-md font-semibold hover:scale-105 transition duration-300">
              {e}
            </li>
         ))}
        </ul>
        </div>
        <div className="flex justify-center gap-4 pt-3">
          <button onClick={addSkill} className="px-4 py-2  bg-amber-600 rounded-lg shadow-md font-semibold hover:shadow-lg transition duration-300">
            Add React Skill
          </button>

          <button onClick={changeCity} className="px-4 py-2 rounded-lg bg-emerald-600 shadow-md font-semibold hover:shadow-lg transition duration-300">
            Change City
          </button>
        </div>
      </div>
    </div>
  );
};

export default Student;