import { useState } from "react";

const LoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center hover:scale-105">
      <div className="bg-white shadow-lg rounded-xl p-8 w-80 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Login Status</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{isLoggedIn ? "Logged In" : "Logged Out"}</h2>
        <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold transition">Login</button>
      </div>
    </div>
  );
};

export default LoginStatus;