import { useState } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Joel",
      role: "Frontend Developer",
    },
    {
      id: 2,
      name: "Godson",
      role: "Backend Developer",
    },
    {
      id: 3,
      name: "Darvin",
      role: "UI Designer",
    },
  ]);

  const handleAdd = () => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1,
        name: "Jerald",
        role: "Java Developer",
      },
    ]);
  };

  const handleUpdate = () => {
    setEmployees(
      employees.map((e) =>
        e.id === 3? { ...e, role: "Full Stack Developer" }: e
      )
    );
  };
  const handleRemove = (id) => {
    setEmployees(
      employees.filter((e) => e.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-violet-300 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-blue-400 rounded-2xl shadow-xl p-8 space-y-6 text-center hover:scale-105 transition duration-300">
        <h1 className="text-4xl font-bold text-indigo-600">Employee Details</h1>
        <div className="space-y-4">
          {employees.map((e) => (
            <div key={e.id} className="bg-violet-300 rounded-xl p-4 shadow-md">
              <p><span className="font-semibold text-slate-700">Name:</span><span className="ml-2 text-blue-600 font-bold">{e.name}</span></p>

              <p><span className="font-semibold text-slate-700">Role:</span><span className="ml-2 text-blue-600 font-bold">{e.role}</span></p>

              <button onClick={() => handleRemove(e.id)} className="mt-3 px-4 py-2 rounded-lg shadow-md font-semibold bg-red-600 text-white hover:shadow-lg transition duration-300">Remove Employee </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">

          <button onClick={handleAdd} className="px-4 py-2 rounded-lg shadow-md font-semibold hover:shadow-lg transition text-white bg-emerald-600 duration-300">Add Employee</button>
          <button onClick={handleUpdate} className="px-4 py-2 rounded-lg shadow-md font-semibold hover:shadow-lg transition bg-yellow-500 text-white duration-300">Update Employee</button>
        </div>
      </div>
    </div>
  );
};

export default Employees;