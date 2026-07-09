import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (user === null) {
    alert("User NOT a Valid user Please Login");
  }

  const handleBack = () => {
    navigate("/dash");
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-green-800 text-white rounded-2xl shadow-lg p-10 text-center">
          <h1 className="text-4xl font-bold">Player Settings</h1>
          <p className="mt-3 text-green-100">
            Manage your Elite Cricket Academy profile.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-green-800 border-b pb-3 mb-6">
            Account Information
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500">Player Name</p>
              <p className="text-xl font-semibold text-gray-800">
                {user?.UserName}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="text-lg text-gray-800">
                {user?.UserEmail}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Membership Status</p>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                Active Player
              </span>
            </div>

            <div>
              <p className="text-sm text-gray-500">Training Batch</p>
              <p className="text-lg text-gray-800">
                Evening Batch (5:00 PM - 7:00 PM)
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Academy</p>
              <p className="text-lg text-gray-800">
                Elite Cricket Academy
              </p>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-green-800 border-b pb-3 mb-6">
            Player Preferences
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-xl p-5 hover:shadow-md transition">
              <h3 className="font-semibold text-green-700 text-lg">
                Practice Sessions
              </h3>
              <p className="text-gray-600 mt-2">
                Attend regular practice sessions to improve batting,
                bowling, and fielding skills.
              </p>
            </div>

            <div className="border rounded-xl p-5 hover:shadow-md transition">
              <h3 className="font-semibold text-green-700 text-lg">
                Notifications
              </h3>
              <p className="text-gray-600 mt-2">
                Receive updates about tournaments, matches, and academy
                events.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleBack}
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition duration-300"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings