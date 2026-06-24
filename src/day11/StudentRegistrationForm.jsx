import { useState } from "react";

const StudentRegistrationForm = () => {
  const [userData, setUserData] = useState({UserName: "",UserAge: "",UserCourse: "",UserCity: "" });
  const [savedData, setSavaedDate] = useState(() => {
    return JSON.parse(localStorage.getItem("StudentInput")) || [];
  })

  const handleEdit = (e) => {
    setUserData({...userData,[e.target.name]: e.target.value, })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!userData.UserName || !userData.UserAge || !userData.UserCourse || !userData.UserCity){
        alert("Enter All  Student Data")
    }
    const localStorageData =JSON.parse(localStorage.getItem("StudentInput")) || [];

    if (Number(userData.UserAge) < 0) {
      alert("The Student Age Must be greater than 0");
      return;
    }

    localStorageData.push(userData);
    alert("Data Successfully Added in Local Storage")

    localStorage.setItem("StudentInput",JSON.stringify(localStorageData))
    setSavaedDate(localStorageData);

    setUserData({UserName: "",UserAge: "",UserCourse: "",UserCity: "",})
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">Student Registration Form</h1>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Student Name </label>
              <input type="text" name="UserName" value={userData.UserName} onChange={handleEdit} placeholder="Enter Your Name" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Age</label>
              <input type="number" name="UserAge" value={userData.UserAge} onChange={handleEdit} placeholder="Enter Your Age" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Course </label>
              <input type="text" name="UserCourse" value={userData.UserCourse} onChange={handleEdit} placeholder="Enter Your Course" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">City</label>
              <input type="text" name="UserCity" value={userData.UserCity} onChange={handleEdit} placeholder="Enter Your City" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-400"/>
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300" >Register</button>
            </div>

          </form>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {savedData.map((e, i) => (
            <div key={i} className="bg-violet-50 border border-violet-200 rounded-2xl shadow-md p-6">
              <p className="mb-3"><span className="font-bold"> Student Name:</span>{" "}{e.UserName}</p>
              <p className="mb-3"> <span className="font-bold">  Age:</span>{" "}{e.UserAge} </p>
              <p className="mb-3"><span className="font-bold">Course:</span>{" "}{e.UserCourse}</p>
              <p><span className="font-bold"> City:</span>{" "}{e.UserCity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentRegistrationForm;