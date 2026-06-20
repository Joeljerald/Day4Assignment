import { useState } from "react";

const FullNameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [add, setAdd] = useState([]);

  const handleAdd = () => {
    if (firstName === "" || lastName === "") return;
    setAdd([...add, { firstName, lastName }]);
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="border-2 mx-80 my-8 bg-white p-6 rounded-xl shadow-lg space-y-4">

      <h2 className="text-2xl font-bold text-center text-indigo-600">Full Name Form</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">First Name</label>
          <input type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-400"/>
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Last Name</label>

          <input type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-400"/>
        </div>

      </form>

      <button onClick={handleAdd} className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition">Add Name</button>

      <div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">Added Names</h3>
        {add.map((item, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded-md mb-2">
            {item.firstName} {item.lastName}
          </div>
        ))}
      </div> 
    </div>
  );
};

export default FullNameForm;