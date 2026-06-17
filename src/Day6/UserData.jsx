import { useState } from "react";

const UserData = () => {
  const [user, setUser] = useState(null);

  const handleChange = () => {
    setUser({
      name: "Joel",
      city: "Chennai",
    });
  };

  return (
    <div className="flex justify-center items-center hover:scale-105">
      <div className="bg-white shadow-lg rounded-xl p-8 w-80 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">User Data Loading</h1>
        {user && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.city}</p>
          </div>
        )}

        <button onClick={handleChange}className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold transition">Load User</button>
      </div>

    </div>
  );
};

export default UserData;