import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const nav = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleSettings = () => {
    nav("/settings");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-green-800 text-white rounded-2xl shadow-lg p-10">
          <h1 className="text-4xl font-bold">
            Welcome, {user?.UserName}! 👋
          </h1>
          <p className="mt-3 text-lg text-green-100">
            Continue your cricket journey with Elite Cricket Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
    
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6 border-b pb-3">Player Profile</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm">Player Name</p>
                <p className="text-xl font-semibold">{user?.UserName}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Email Address</p>
                <p className="text-lg">{user?.UserEmail}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Membership</p>
                <p className="font-semibold text-green-700">Active Player</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Batch</p>
                <p>Evening Practice (5:00 PM - 7:00 PM)</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6 border-b pb-3">Performance Report</h2>

            <div className="space-y-5">
              <div className="flex justify-between">
                <span className="text-gray-600">Batting</span>
                <span className="font-bold text-green-700">88%</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Bowling</span>
                <span className="font-bold text-green-700">93%</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Fielding</span>
                <span className="font-bold text-green-700">91%</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Fitness</span>
                <span className="font-bold text-green-700">88%</span>
              </div>

              <div className="bg-green-100 border-l-4 border-green-700 p-4 rounded-lg mt-6">
                <p className="font-semibold text-green-800">Coach's Remark</p>
                <p className="text-gray-700 mt-2">
                  Excellent improvement in batting and fielding. Maintain
                  consistency during practice sessions and focus on bowling
                  accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">
          <h2 className="text-2xl font-bold text-green-800 mb-5">Upcoming Training Schedule</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-5 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-green-700">Monday</h3>
              <p className="text-gray-600 mt-2">Batting Practice & Net Sessions</p>
            </div>

            <div className="border rounded-xl p-5 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-green-700">Wednesday
              </h3>
              <p className="text-gray-600 mt-2">Bowling Accuracy & Fitness Training</p>
            </div>

            <div className="border rounded-xl p-5 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-green-700">
                Saturday
              </h3>
              <p className="text-gray-600 mt-2">
                Practice Match & Team Strategy
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <button
            onClick={handleSettings}
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-md"
          >
            Go to Settings
          </button>

          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;