import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userData, setUserData] = useState({UserEmail: "",UserPassword: ""})
  const navigate = useNavigate();
  const handleEdit = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.UserEmail || !userData.UserPassword) {
      alert("Enter All User Data");
      return;
    }

    const localStorageData =JSON.parse(localStorage.getItem("userInput")) || [];

    const CheckAuth = localStorageData.find((e) =>e.UserEmail === userData.UserEmail && e.UserPassword === userData.UserPassword)
    if (!CheckAuth) {
      alert("User Not Found");
      return
    }
    localStorage.setItem("Auth", JSON.stringify(CheckAuth));

    setUserData({UserEmail: "",UserPassword: ""});

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-700">Cricket Academy</h1>
          <p className="text-gray-500 mt-2">Login to access your player dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700">Email Address</label>
            <input type="email" name="UserEmail" value={userData.UserEmail} onChange={handleEdit} placeholder="Enter your email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Password</label>
            <input type="password" name="UserPassword" value={userData.UserPassword} onChange={handleEdit} placeholder="Enter your password" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"> Login </button>

        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">New to Cricket Academy?</p>
          <button onClick={() => navigate("/registerform")} className="mt-3 text-green-700 font-semibold hover:underline" type="button">Create an Account</button>
        </div>

      </div>

    </div>
  )
}

export default LoginForm;