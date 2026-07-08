import { useContext } from "react";
import StudentContext from "../context/StudentContext";

const StudentDisplay = () => {
  const { StudentObj } = useContext(StudentContext);

  return (
    <div className="bg-gray-100 py-12 px-6 flex justify-center mx-30 rounded-2xl">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Student Table
        </h1>

        <table className="w-full border-collapse overflow-hidden rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Course</th>
            </tr>
          </thead>

          <tbody>
            {StudentObj.map((e) => (
              <tr
                key={e.id}
                className="text-center border-b hover:bg-gray-100 transition"
              >
                <td className="p-3">{e.id}</td>
                <td className="p-3">{e.name}</td>
                <td className="p-3">{e.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDisplay;