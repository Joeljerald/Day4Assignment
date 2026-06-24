import { useState } from "react";

const UserProfile = () => {
  const [userData, setUserData] = useState({UserName: "",UserNumber: "",UserEmail: "",UserAddress: ""});
  const [savedData, setSavaedDate] = useState(() => {
    return JSON.parse(localStorage.getItem("userInput")) || [];
  })

  const handleEdit = (e) => {
    setUserData({...userData,[e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!userData.UserName || !userData.UserNumber || !userData.UserEmail || !userData.UserAddress){
        alert("Enter All User Data")
    }
    const localStorageData =JSON.parse(localStorage.getItem("userInput")) || [];
    const CheckEmail = localStorageData.find((e) => e.UserEmail === userData.UserEmail)
    if (CheckEmail) {
      alert("Existing Email");
      return;
    }

    localStorageData.push(userData);

     alert("Data Successfully Added in Local Storage")

    localStorage.setItem("userInput",JSON.stringify(localStorageData))
    setSavaedDate(localStorageData);

    setUserData({UserName: "",UserNumber: "",UserEmail: "",UserAddress: "",})
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-rose-700 mb-8">User Profile Form</h1>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">User Name</label>
              <input type="text" name="UserName"value={userData.UserName}onChange={handleEdit}placeholder="Enter Your Name"className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-rose-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700"> Mobile Number</label>
              <input type="number" name="UserNumber" value={userData.UserNumber} onChange={handleEdit} placeholder="Enter Your Number" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-rose-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Email</label>
              <input type="email"name="UserEmail"value={userData.UserEmail}onChange={handleEdit}placeholder="Enter Your Email"className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-rose-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Address</label>
              <input type="text" name="UserAddress" value={userData.UserAddress} onChange={handleEdit} placeholder="Enter Your Address" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-rose-400"/>
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition duration-300">Create</button>
            </div>
          </form>

        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {savedData.map((e, i) => (
            <div key={i} className="bg-pink-50 border border-pink-200 rounded-2xl shadow-md p-6">
              <p className="mb-3"> <span className="font-bold">User Name:</span>{" "}{e.UserName}</p>
              <p className="mb-3"><span className="font-bold">Mobile Number:</span>{" "}{e.UserNumber}</p>
              <p className="mb-3"><span className="font-bold">Email:</span>{" "}{e.UserEmail}</p>
              <p><span className="font-bold">Address:</span>{" "}{e.UserAddress}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default UserProfile;