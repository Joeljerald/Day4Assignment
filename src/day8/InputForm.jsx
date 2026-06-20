import { useState } from "react"

const InputForm = () => {
  const[formData,setFormData]=useState("")
    const[studentName,setStudentName]=useState("")
    const[employeeName,setEmployeeName]=useState("")
    const[age,setAge]=useState("")
    const[email,setEmail]=useState("")
    const[phoneNumber,setphoneNumber]=useState("")
    const[city,setCity]=useState("")
    const[course,setCourse]=useState("")
    const[search,setSearch]=useState("")
    
    const[submit,setSubmit]=useState(false)
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(studentName==""||employeeName==""||age==""||email==""||phoneNumber==""||city==""||course==""||search=="")return
      setFormData({
          studentName,
          employeeName,
          age,
          email,
          phoneNumber,
          city,
          course,
          search,
    
  });
      setSubmit(true);
      setAge("");
      setCity("");
      setCourse("");
      setEmail("");
      setEmployeeName("");
      setSearch("");
      setStudentName("");
      setphoneNumber("");
    }
  return (
    <div className=" border-2 mx-80 my-8 bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">Form Handling</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
            <label htmlFor="Name" className="block font-semibold text-gray-700 mb-1">Student Name </label>
            <input type="text" value={studentName} placeholder="Enter your Student Name" onChange={(e)=>setStudentName(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
            </div>

            <div>
            <label htmlFor="Name" className="block font-semibold text-gray-700 mb-1">Name </label>
            <input type="text" value={employeeName} placeholder="Enter your Employee Name" onChange={(e)=>setEmployeeName(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
            
            </div>

            <div>
              <label htmlFor="Age" className="block font-semibold text-gray-700 mb-1">Age: </label>
              <input type="number" min="0" value={age} placeholder="Enter your Age" onChange={(e)=>setAge(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
            
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">Email: </label>
              <input type="email" value={email} placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
              
            </div>

            <div>
              <label htmlFor="Mobile number" className="block font-semibold text-gray-700 mb-1">Phone Number</label>
              <input type="number" value={phoneNumber} placeholder="Enter your Mobile Number" onChange={(e)=>setphoneNumber(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
    
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">City</label>
              <select value={city} onChange={(e)=>setCity(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <option value="Select the City">Select the City</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Madurai">Madurai</option>
                <option value="Trichy">Trichy</option>
                <option value="Melakavanoor">Melakavanoor</option>
              </select>
              
            </div>

             <div>
              <label htmlFor="Mobile number" className="block font-semibold text-gray-700 mb-1">Course Registration</label>
              <input type="text" value={course} placeholder="Enter your Course" onChange={(e)=>setCourse(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
              
            </div>

            <div>
              <label htmlFor="Search" className="block font-semibold text-gray-700 mb-1">Search Here</label>
              <input type="text" value={search} placeholder="Search Here" onChange={(e)=>setSearch(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
          
            </div>

            

             <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Submit
        </button>
        </form>

        {submit && (
        <div>
          <h2>Form Submitted Successfully</h2>
          <p>Student Name: {formData.studentName}</p>
          <p>Employee Name: {formData.employeeName}</p>
          <p>Age: {formData.age}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phoneNumber}</p>
          <p>City: {formData.city}</p>
          <p>Course: {formData.course}</p>
          <p>Search: {formData.search}</p>
      
        </div>
)}
    </div>
  )
}

export default InputForm