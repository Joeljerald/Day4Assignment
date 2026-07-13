import { useMemo, useState } from "react";

const studentData = (students) => {
  return {
    totalStudent: students.length,
    placedStudent: students.filter((student) => student.placed).length,
    unPlacedStudent: students.filter((student) => !student.placed).length,
  }
}

const StudentMemo = () => {
  const students = [
    {
      id: 1,
      name: "Joel",
      course: "MERN Stack",
      placed: true,
    },
    {
      id: 2,
      name: "Jamie",
      course: "Java Full Stack",
      placed: false,
    },
    {
      id: 3,
      name: "Darvin",
      course: "Python",
      placed: true,
    },
    {
      id: 4,
      name: "Godson",
      course: "React",
      placed: false,
    },
    {
      id: 5,
      name: "Jerald",
      course: "Node.js",
      placed: true,
    },
  ];

  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme((prev) => !prev);
  };

  const studentRecord = useMemo(() => {
    return studentData(students);
  }, [])

  return (
    <div
      className={theme? "min-h-screen bg-slate-900 text-white p-8 transition-all duration-500" : "min-h-screen bg-sky-100 text-gray-900 p-8 transition-all duration-500"}>
      <div className="max-w-6xl mx-auto">
   
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold">Student Dashboard</h1>

          <button onClick={handleTheme} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition">Change Theme</button>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-blue-600">
            
            <h2 className="text-lg font-semibold text-gray-600">Total Students</h2>
            <p className="text-4xl font-bold text-blue-600 mt-3">{studentRecord.totalStudent}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-green-600">
            <h2 className="text-lg font-semibold text-gray-600"> Placed Students</h2>
            <p className="text-4xl font-bold text-green-600 mt-3">{studentRecord.placedStudent}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-red-600">
            <h2 className="text-lg font-semibold text-gray-600">Unplaced Students</h2>
            <p className="text-4xl font-bold text-red-600 mt-3">{studentRecord.unPlacedStudent}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((e) => (
            <div key={e.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 border-l-4 border-indigo-600">
              
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">{e.name}</h2>

              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Student ID:</span> {e.id}
                </p>

                <p>
                  <span className="font-semibold">Course:</span> {e.course}
                </p>

                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  <span className={ e.placed? "text-green-600 font-semibold": "text-red-600 font-semibold"}>
                    {e.placed ? "Placed" : "Unplaced"}
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

export default StudentMemo