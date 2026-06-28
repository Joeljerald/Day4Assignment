import { useState } from "react"


const EmployeeManagement = () => {
    const[employeeDetails,setEmployeeDetails]=useState({employeeName:"",employeeID:"",department:"", salary:""})
    const[storeEmployee,setStoreEmployee]=useState(()=>{
        return JSON.parse(localStorage.getItem("employeemanagement")) || [];
    });

    const handlechange=(e)=>{
        setEmployeeDetails({...employeeDetails,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!employeeDetails.employeeName || !employeeDetails.employeeID || !employeeDetails.department || !employeeDetails.salary){
            alert("Enter all Value")
            return;
        }
        const empLocal=JSON.parse(localStorage.getItem("employeemanagement"))||[];
        const checkID=empLocal.find((e)=>e.employeeID===employeeDetails.employeeID)
        if(checkID){
            alert("Employee ID Exits")
            return
        }
        empLocal.push(employeeDetails)
        alert("Employee Added Successfully in a Local Storage");
        
        localStorage.setItem("employeemanagement",JSON.stringify(empLocal))
        setStoreEmployee(empLocal)
        setEmployeeDetails({employeeName:"",employeeID:"",department:"", salary:""})
    }

    const handleLogout=(item)=>{
    const updateEmployee=storeEmployee.filter((_,i)=>i!=item)
    localStorage.setItem("employeemanagement",JSON.stringify(updateEmployee))
    setStoreEmployee(updateEmployee)
    alert("Employee removed Successfully")
  }
    return (
    <div className="min-h-screen bg-slate-100 p-8">
        <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Employee Management System</h1>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
                <label className="font-semibold mb-2 text-slate-700">Employee Name</label>
                <input type="text" value={employeeDetails.employeeName} name="employeeName" placeholder="Enter Employee Name" onChange={handlechange} className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold mb-2 text-slate-700">Employee ID</label>
                <input type="text" value={employeeDetails.employeeID} name="employeeID" placeholder="Enter Employee ID" onChange={handlechange} className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold mb-2 text-slate-700"> Department</label>
                <input type="text" value={employeeDetails.department} name="department" placeholder="Enter Department" onChange={handlechange} className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            <div className="flex flex-col">
                <label className="font-semibold mb-2 text-slate-700">Salary </label>
                <input type="text" value={employeeDetails.salary} name="salary" placeholder="Enter Salary" onChange={handlechange} className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            <div className="md:col-span-2">
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition" >Add Employee</button>
            </div>

            

            </form>
        </div>

       
     

        {storeEmployee.length > 0 && (
             <div mt-10>
             <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Employee Records</h2>
            <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">

           

            <table className="w-full border-collapse">
                <thead>
                <tr className="bg-blue-600 text-white">
                    <th className="border p-3">Employee ID</th>
                    <th className="border p-3">Employee Name</th>
                    <th className="border p-3">Department</th>
                    <th className="border p-3">Salary</th>
                    <th className="border p-3">Action</th>
                </tr>
                </thead>

                <tbody>
                {storeEmployee.map((e, id) => (
                    <tr key={id} className="text-center hover:bg-slate-100 transition">
                    <td className="border p-3">{e.employeeID}</td>
                    <td className="border p-3">{e.employeeName}</td>
                    <td className="border p-3">{e.department}</td>
                    <td className="border p-3">₹{e.salary}</td>
                    <td><button onClick={()=>handleLogout(id) } className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300" >Delete Employee </button></td>
                    </tr>
                    
                ))}
                </tbody>
            </table>
           

            </div>
                </div>
        )}
       

        </div>
    </div>
);}

export default EmployeeManagement