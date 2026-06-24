import { useState } from "react";

const EmployeeDetails = () => {
  const [employeeDetails, setemployeeDetails] = useState({EmployeeName: "",EmployeeID: "",Department: "",Salary: "",});
  const [displayEmployee, setDisplayEmployee] = useState(() => {
    return JSON.parse(localStorage.getItem("EmployeeInput")) || [];
  })

  const handleChange = (e) => {
    setemployeeDetails({...employeeDetails, [e.target.name]: e.target.value,})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!employeeDetails.EmployeeName || !employeeDetails.EmployeeID || !employeeDetails.Department  || !employeeDetails.Salary ){
        alert("Enter All Employee Data")
        return
    }

    const Storage =
      JSON.parse(localStorage.getItem("EmployeeInput")) || []

    if (Number(employeeDetails.Salary) <= 0) {
      alert("The Salary must be greater than 0");
      return;
    }
    Storage.push(employeeDetails);
    alert("Data Successfully Added in Local Storage")
    localStorage.setItem("EmployeeInput",JSON.stringify(Storage));

    setDisplayEmployee(Storage);
    setemployeeDetails({ EmployeeName: "",EmployeeID: "",Department: "",Salary: "",})
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">Employee Details Form</h1>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Employee Name</label>
              <input type="text" value={employeeDetails.EmployeeName} name="EmployeeName" onChange={handleChange} placeholder="Enter employee name" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">
                Employee ID
              </label>

              <input type="number" value={employeeDetails.EmployeeID} name="EmployeeID" onChange={handleChange} placeholder="Enter employee ID"className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Department</label>
              <input type="text" value={employeeDetails.Department} name="Department" onChange={handleChange} placeholder="Enter department" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Salary</label>
              <input type="number" value={employeeDetails.Salary} name="Salary" onChange={handleChange} placeholder="Enter salary" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400"/>
            </div>

            <div className="md:col-span-2">
              <button type="submit"className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">Submit</button>
            </div>
          </form>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">

          {displayEmployee.map((e, i) => (
            <div key={i} className="bg-amber-50 border border-amber-200 rounded-2xl shadow-md p-6">
              <p className="mb-3"><span className="font-bold text-slate-700">Employee Name:</span>{" "}{e.EmployeeName}</p>
              <p className="mb-3"><span className="font-bold text-slate-700">Employee ID:</span>{" "}{e.EmployeeID}</p>
              <p className="mb-3"><span className="font-bold text-slate-700">Department:</span>{" "}{e.Department}</p>
              <p><span className="font-bold text-slate-700">Salary:</span>{" "}₹{e.Salary}</p>
            </div>
                 ))}
        </div>

    </div>

    </div>
  )
}

export default EmployeeDetails;