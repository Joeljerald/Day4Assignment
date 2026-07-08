import { useContext } from "react";
import DashboardContext from "../context/DashboardContext";

const DashboardDisplay = () => {
  const { dashboardObj } = useContext(DashboardContext);

  return (
    <div className="bg-gray-100 py-12 px-6 flex justify-center mx-30 rounded-2xl">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-blue-500 text-white rounded-xl p-6 shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2">Students</h2>
            <p className="text-4xl font-bold">
              {dashboardObj.totalStudents}
            </p>
          </div>

          <div className="bg-green-500 text-white rounded-xl p-6 shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2">Courses</h2>
            <p className="text-4xl font-bold">
              {dashboardObj.totalCourses}
            </p>
          </div>

          <div className="bg-purple-500 text-white rounded-xl p-6 shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2">Placements</h2>
            <p className="text-4xl font-bold">
              {dashboardObj.totalPlacements}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardDisplay;