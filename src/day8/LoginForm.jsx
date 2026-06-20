import { useState } from "react";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      userName,
      password,
    });

    setUserName("");
    setPassword("");
  };

  return (
    <div className="border-2 mx-80 my-8 bg-white p-6 rounded-2xl shadow-lg">

      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Login Form</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-medium text-gray-700 mb-2">User Name</label>
          <input type="text" value={userName} placeholder="Enter User Name" onChange={(e) => setUserName(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">Password </label>

          <input type="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        </div>

        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">Submit</button>

      </form>

      {user && (
        <div className="mt-6 bg-gray-100 p-5 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-green-600 mb-4">Submitted Data</h2>
          <p className="mb-2"><span className="font-semibold">User Name: </span>{user.userName}</p>
          <p><span className="font-semibold">Password: </span>{user.password}</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;