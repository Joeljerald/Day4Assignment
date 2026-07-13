import { useMemo, useState } from "react";

const totalSalary = (salary) => {
  console.log("Calculating Total Salary...");
  return salary.reduce((total, sum) => total + sum.salary, 0)
}

const EmployeeMemo = () => {
  const employees = [
    {
      id: 1,
      name: "Joel",
      department: "Frontend",
      salary: 50000,
    },
    {
      id: 2,
      name: "Jamie",
      department: "Backend",
      salary: 60000,
    },
    {
      id: 3,
      name: "Darvin",
      department: "UI/UX",
      salary: 45000,
    },
    {
      id: 4,
      name: "Godson",
      department: "Testing",
      salary: 40000,
    },
    {
      id: 5,
      name: "Jerald",
      department: "DevOps",
      salary: 70000,
    },
  ];

  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  }

  const employeeSalary = useMemo(() => {
    return totalSalary(employees);
  }, [])

  return (
    <div
      className={theme? "min-h-screen bg-slate-900 text-white p-8 transition-all duration-500": "min-h-screen bg-sky-100 text-gray-900 p-8 transition-all duration-500"}>
      <div className="max-w-6xl mx-auto">
       
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Employee Salary Dashboard</h1>

          <button onClick={handleTheme} className="mt-4 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition">
            Change Theme
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold text-gray-700">Total Salary Expense</h2>

          <p className="text-4xl font-bold text-indigo-600 mt-3">₹ {employeeSalary.toLocaleString()}</p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((e) => (
            <div key={e.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 border-l-4 border-indigo-600">
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">{e.name}</h2>

              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Employee ID:</span> {e.id}</p>

                <p><span className="font-semibold">Department:</span>{" "} {e.department}</p>

                <p>
                  <span className="font-semibold">Salary:</span>{" "}
                  <span className="text-green-600 font-bold">
                    ₹ {e.salary.toLocaleString()}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmployeeMemo