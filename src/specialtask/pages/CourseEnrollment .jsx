import { useState } from "react";

const CourseEnrollment= () => {
  const [courseEnrollment, setCourseEnrollment] = useState({studentName: "",CourseName: "",CourseDuration: "" });
  const [savedData, setSavaedDate] = useState(() => {
    return JSON.parse(localStorage.getItem("CourseEnrollment")) || [];
  })

  const handleEdit = (e) => {
    setCourseEnrollment({...courseEnrollment,[e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!courseEnrollment.studentName || !courseEnrollment.CourseName || !courseEnrollment.CourseDuration){
        alert("Enter All  Student Data")
        return
    }
    const localStorageData =JSON.parse(localStorage.getItem("CourseEnrollment")) || [];


    localStorageData.push(courseEnrollment);
    alert("Student Enrolled Successfully Added in Local Storage")

    localStorage.setItem("CourseEnrollment",JSON.stringify(localStorageData))
    setSavaedDate(localStorageData);

    setCourseEnrollment({studentName: "",CourseName: "",CourseDuration: "" })
  }

  const handleDelete=(item)=>{
    const updatedCourse=savedData.filter((_,i)=>i!==item)
    localStorage.setItem("CourseEnrollment",JSON.stringify(updatedCourse))
    setSavaedDate(updatedCourse)
    alert("Course Deleted Successfully");

  
    
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">Course Enrollment Form</h1>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Student Name </label>
              <input type="text" name="studentName" value={courseEnrollment.studentName} onChange={handleEdit} placeholder="Enter Your Name" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-400"/>
            </div>


            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Course </label>
              <input type="text" name="CourseName" value={courseEnrollment.CourseName} onChange={handleEdit} placeholder="Enter Your Course" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Course Duration </label>
              <input type="text" name="CourseDuration" value={courseEnrollment.CourseDuration} onChange={handleEdit} placeholder="Enter Your Course Duration" className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-400"/>
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300" >Enroll Now</button>
            </div>

          </form>
           
        </div>
        <div className="mt-10">
          {savedData.length>0 && (
            <div className="mt-10">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Course Enrollment Records</h2>
       

        <div className="mt-10 grid md:grid-cols-2 gap-6">
           
          {savedData.map((e, i) => (
            <div key={i} className="bg-violet-50 border border-violet-200 rounded-2xl shadow-md p-6">
              <p className="mb-3"><span className="font-bold"> Student Name:</span>{" "}{e.studentName}</p>
              <p className="mb-3"><span className="font-bold">Course:</span>{" "}{e.CourseName}</p>
              <p><span className="font-bold"> Course Duration:</span>{" "}{e.CourseDuration}</p>
              <div className="md:col-span-2">
              <button onClick={() => handleDelete(i)} className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">Delete Course</button>
            </div>
            </div>
          ))}
           </div>
           </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseEnrollment;