import { useState } from "react";

const UserObject = () => {
  const [user, setUser] = useState({
    name: "ArulSamy",
    age: 52,
    city: "America",
  });

  const handleObj = () => {
    setUser({
      name: "Joel",
      age: 22,
      city: "India",
    });
  };

  return (
    <div className="flex justify-center items-center py-10 bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 mb-80">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Object using useState</h1>
        <div className="space-y-3 text-lg">
          <h2><span className="font-bold">Name:</span> {user.name}</h2>
          <h2><span className="font-bold">Age:</span> {user.age}</h2>
          <h2><span className="font-bold">City:</span> {user.city}</h2>
        </div>
        <div className="mt-6 flex justify-center">
          <button onClick={handleObj} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold transition duration-300">Change Object</button>
        </div>
      </div>
    </div>
  );
};

export default UserObject;