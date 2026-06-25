import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [userData, setUserData] = useState({ UserName: "", UserEmail: "", UserPassword: "", });
  const navigate = useNavigate();
  const handleEdit = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const handleNavigate = () => {
    navigate("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.UserName || !userData.UserEmail || !userData.UserPassword) {
      alert("Enter All User Data");
      return;
    }

    const localStorageData =JSON.parse(localStorage.getItem("userInput")) || [];
    const CheckEmail = localStorageData.find((e) => e.UserEmail === userData.UserEmail)
    if (CheckEmail) {
      alert("Email Already Exists");
      return
    }
    localStorageData.push(userData);
    localStorage.setItem( "userInput", JSON.stringify(localStorageData))
    alert("Registration Successful");

    setUserData({UserName: "",UserEmail: "",UserPassword: "",})
    navigate("/loginform")
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-700"> Cricket Academy</h1>
          <p className="text-gray-500 mt-2">Register to become a member of our academy.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium text-gray-700">Full Name</label>
            <input type="text" name="UserName" value={userData.UserName} onChange={handleEdit} placeholder="Enter your full name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Email Address</label>
            <input type="email" name="UserEmail" value={userData.UserEmail} onChange={handleEdit} placeholder="Enter your email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Password</label>
            <input type="password" name="UserPassword" value={userData.UserPassword} onChange={handleEdit} placeholder="Create a password" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition">  Register</button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">Already have an account?</p>
          <button type="button" onClick={handleNavigate} className="mt-3 text-green-700 font-semibold hover:underline">Login Here </button>
        </div>

      </div>

    </div>
  )
}

export default RegisterForm;