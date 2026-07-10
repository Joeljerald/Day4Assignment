import useLocal from "../components/useLocal";

const Local = () => {
  const { student, display, handleChange, handleSubmit } = useLocal();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center p-8">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Student Registration</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block font-medium mb-2">Student ID</label>
            <input type="text" value={student.studentID} name="studentID" onChange={handleChange} placeholder="Enter Enrollment ID" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div>
            <label className="block font-medium mb-2">Student Name</label>
            <input type="text" value={student.studentName} name="studentName" onChange={handleChange} placeholder="Enter Student Name" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div>
            <label className="block font-medium mb-2">Course</label>
            <input type="text" value={student.course} name="course" onChange={handleChange} placeholder="Enter Course" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div>
            <label className="block font-medium mb-2">Institute</label>
            <input type="text" value={student.institude} name="institude" onChange={handleChange} placeholder="Enter Institute" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
        </div>

        <div className="text-center mt-8">
          <button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Submit
          </button>
        </div>
      </div>

      {display.length > 0 && (
        <div className="bg-white shadow-lg rounded-xl p-6 mt-8 w-full max-w-6xl overflow-x-auto">
          <h2 className="text-2xl font-bold text-center text-slate-700 mb-6">Student Records</h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border px-4 py-3">Student ID</th>
                <th className="border px-4 py-3">Student Name</th>
                <th className="border px-4 py-3">Course</th>
                <th className="border px-4 py-3">Institute</th>
              </tr>
            </thead>

            <tbody>
              {display.map((e) => (
                <tr key={e.studentID} className="text-center hover:bg-slate-100">
                  <td className="border px-4 py-3">{e.studentID}</td>
                  <td className="border px-4 py-3">{e.studentName}</td>
                  <td className="border px-4 py-3">{e.course}</td>
                  <td className="border px-4 py-3">{e.institude}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Local