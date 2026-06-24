import { useState } from "react";

const SchoolManagement = () => {
  const [school, setSchool] = useState({SchoolName: "", PrincipalName: "", City: "", TotalStudents: "",});
  const [displaySchool, setDisplaySchool] = useState(() => {
    return JSON.parse(localStorage.getItem("SchoolInput")) || [];
  })

  const handleEdit = (e) => {
    setSchool({...school,[e.target.name]: e.target.value,})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!school.SchoolName || !school.PrincipalName||!school.City|| !school.TotalStudents){
        alert("Enter All School  Data")
    }

    const schoolLocal =JSON.parse(localStorage.getItem("SchoolInput")) || [];

    if (Number(school.TotalStudents) <= 0) {
      alert("Enter a Correct Student Count");
      return;
    }
    schoolLocal.push(school);
    alert("Data Successfully Added in Local Storage")

    localStorage.setItem("SchoolInput",JSON.stringify(schoolLocal));
    setDisplaySchool(schoolLocal);

    setSchool({SchoolName: "",PrincipalName: "",City: "",TotalStudents: "",})
}

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-8"> School Management Form</h1>
          
          <form onSubmit={handleSubmit}className="grid md:grid-cols-2 gap-6">

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">School Name</label>
              <input type="text" name="SchoolName" value={school.SchoolName} onChange={handleEdit} placeholder="Enter School Name" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Principal Name</label>
              <input type="text" name="PrincipalName" value={school.PrincipalName}onChange={handleEdit} placeholder="Enter Principal Name" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">City</label>
              <input type="text" name="City" value={school.City} onChange={handleEdit} placeholder="Enter City" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Total Students</label>
              <input type="number" name="TotalStudents" value={school.TotalStudents} onChange={handleEdit} placeholder="Enter Student Count" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">Register</button>
            </div>

          </form>

        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {displaySchool.map((e, i) => (
            <div key={i} className="bg-cyan-50 border border-cyan-200 rounded-2xl shadow-md p-6">
              <p className="mb-3"><span className="font-bold">School Name:</span>{" "}{e.SchoolName}</p>
              <p className="mb-3"><span className="font-bold"> Principal Name:</span>{" "}{e.PrincipalName}</p>
              <p className="mb-3"><span className="font-bold"> City:</span>{" "}{e.City}</p>
              <p><span className="font-bold"> Total Students:</span>{" "}{e.TotalStudents}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default SchoolManagement;