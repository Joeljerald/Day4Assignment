import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const auth = JSON.parse(localStorage.getItem("Auth"));
  const navigate = useNavigate();

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <h2 className="text-2xl font-bold text-red-600">You are not logged in.</h2>
      </div>
    )
  }

  const handleLogout = () => {
    localStorage.removeItem("Auth");
    navigate("/home");
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

      
        <div className="bg-green-700 text-white px-8 py-6">
          <h1 className="text-3xl font-bold">Elite Cricket Academy</h1>
          <p className="mt-2 text-green-100">Player Dashboard</p>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">Player Information</h2>
          <div className="grid grid-cols-2 gap-6 mb-10">

            <div className="bg-slate-50 p-5 rounded-xl border">
              <p className="text-gray-500">Player Name</p>
              <h3 className="text-xl font-semibold mt-2">{auth.UserName}</h3>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border">
              <p className="text-gray-500">Email Address</p>
              <h3 className="text-xl font-semibold mt-2">{auth.UserEmail}</h3>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border">
              <p className="text-gray-500">Player ID</p>
              <h3 className="text-xl font-semibold mt-2">ECA1025</h3>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border">
              <p className="text-gray-500">Membership</p>
              <h3 className="text-green-700 font-bold mt-2">Active</h3>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-5">Performance Summary</h2>
          <div className="overflow-x-auto mb-10">
            
            <table className="w-full  border">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="border p-3">Matches</th>
                  <th className="border p-3">Runs</th>
                  <th className="border p-3">Wickets</th>
                  <th className="border p-3">Catches</th>
                </tr>
              </thead>

              <tbody>
                <tr className="text-center">
                  <td className="border p-3">28</td>
                  <td className="border p-3">845</td>
                  <td className="border p-3">18</td>
                  <td className="border p-3">19</td>
                </tr>
              </tbody>

            </table>

          </div>


          <h2 className="text-2xl font-bold text-slate-800 mb-5"> Coach Remarks</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-10">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Excellent batting technique and footwork.</li>
              <li>Needs improvement in bowling consistency.</li>
              <li>Very disciplined during practice sessions.</li>
              <li>Recommended for the district-level tournament.</li>
            </ul>

          </div>

          <h2 className="text-2xl font-bold text-slate-800 mb-5">Weekly Training Schedule</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse border">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="border p-3">Day</th>
                  <th className="border p-3">Training</th>
                  <th className="border p-3">Time</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">Monday</td>
                  <td className="border p-3">Batting Practice</td>
                  <td className="border p-3">6:00 PM</td>
                </tr>

                <tr>
                  <td className="border p-3">Wednesday</td>
                  <td className="border p-3">Bowling Practice</td>
                  <td className="border p-3">6:00 PM</td>
                </tr>

                <tr>
                  <td className="border p-3">Friday</td>
                  <td className="border p-3">Fitness Training</td>
                  <td className="border p-3">5:30 PM</td>
                </tr>

                <tr>
                  <td className="border p-3">Sunday</td>
                  <td className="border p-3">Practice Match</td>
                  <td className="border p-3">7:00 AM</td>
                </tr>

              </tbody>

            </table>

          </div>

          <h2 className="text-2xl font-bold text-slate-800 mb-5">Achievements</h2>
          <div className="bg-green-50 rounded-xl border p-6 mb-10">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Best Batsman - Summer Cup 2026</li>
              <li>Man of the Match - Academy League</li>
              <li>Outstanding Attendance Award</li>
              <li>Selected for state Cricket Trials</li>
            </ul>

          </div>

          <div className="mt-10 flex justify-between items-center border-t pt-6">
            <p className="text-gray-600">Logged in as <strong>{auth.UserName}</strong></p>
            <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"> Logout</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard