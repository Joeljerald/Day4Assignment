import { useState } from "react";
import UserCard from "../components/UserCard";
import withUser from "../hoc/withUser";

const EnhancedUserList = withUser(UserCard);

const UserMain = () => {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">User Card</h1>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Enter Your Name</label>
          <input type="text" placeholder="Enter a Name"value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Enter Your Role</label>

          <input type="text" placeholder="Enter a Role" value={role} onChange={(e) => setRole(e.target.value)} className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500"/>
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Enter Your Color</label>
          <input type="text" placeholder="Enter a Color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"/>
        </div>

        <EnhancedUserList name={name} role={role} color={color}/>
      </div>
    </div>
  );
};

export default UserMain;