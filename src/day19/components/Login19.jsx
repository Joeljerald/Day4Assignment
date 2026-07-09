import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login19 = () => {
  const { login } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    UserEmail: "",
    UserPassword: "",
  })

  const navigate = useNavigate();

  const handleEdit = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.UserEmail || !userData.UserPassword) {
      alert("Enter All User Data");
      return;
    }

    const localStorageData =
      JSON.parse(localStorage.getItem("userInput")) || [];

    const CheckAuth = localStorageData.find(
      (e) =>
        e.UserEmail === userData.UserEmail &&
        e.UserPassword === userData.UserPassword
    )

    if (CheckAuth) {
      login(CheckAuth);
      navigate("/dash");
    } else {
      alert("Invalid User");
    }

    setUserData({
      UserEmail: "",
      UserPassword: "",
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-green-800 text-white text-center py-8 px-6">
          <h1 className="text-3xl font-bold">Elite Cricket Academy</h1>
          <p className="mt-2 text-green-100">
            Login to access your player dashboard
          </p>
        </div>

    
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-8">
            Player Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="UserEmail"
                value={userData.UserEmail}
                onChange={handleEdit}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>


            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>

              <input
                type="password"
                name="UserPassword"
                value={userData.UserPassword}
                onChange={handleEdit}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-md"
            >
              Login
            </button>
          </form>


          <div className="mt-8 text-center text-gray-500 text-sm">
            Welcome back! Continue your cricket journey with us.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login19