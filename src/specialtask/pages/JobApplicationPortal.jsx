import { useState } from "react";

const JobApplicationPortal = () => {
  const [candidate, setCandidate] = useState({ candidateName: "", email: "", skill: "", experience: "" });

  const [applications, setApplications] = useState(() => {
    return JSON.parse(localStorage.getItem("JobApplications")) || [];
  });

  const handleChange = (e) => {
    setCandidate({...candidate,[e.target.name]: e.target.value,})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!candidate.candidateName ||  !candidate.email || !candidate.skill || !candidate.experience) {
      alert("Enter All Candidate Details");
      return;
    }

    const localData =JSON.parse(localStorage.getItem("JobApplications")) || [];

    const checkEmail = localData.find((e) => e.email === candidate.email)

    if (checkEmail) {
      alert("Email Already Exists");
      return;
    }

    localData.push(candidate);

    localStorage.setItem("JobApplications",JSON.stringify(localData))
    setApplications(localData);

    alert("Application Submitted Successfully");

    setCandidate({candidateName: "",email: "",skill: "",experience: "",})
  }

  const handleDelete = (index) => {
    const updatedApplication = applications.filter((_, i) => i !== index)

    localStorage.setItem("JobApplications",JSON.stringify(updatedApplication))
    setApplications(updatedApplication);

    alert("Applicant Rejected Successfully");
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">

          <h1 className="text-4xl font-extrabold text-center text-blue-700">Job Application Portal</h1>
          
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-semibold text-slate-700 mb-2"> Candidate Name</label>

              <input type="text" name="candidateName" value={candidate.candidateName} onChange={handleChange} placeholder="Enter Candidate Name" className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-slate-700 mb-2">Email</label>

              <input type="email" name="email" value={candidate.email} onChange={handleChange} placeholder="Enter Email" className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-slate-700 mb-2">Skill</label>
              <input type="text" name="skill" value={candidate.skill} onChange={handleChange} placeholder="Enter Skill" className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-slate-700 mb-2"> Experience</label>
              <input type="number" name="experience" value={candidate.experience} onChange={handleChange} placeholder="Experience in Years" className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"/>
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg transition duration-300">Submit Application</button>
            </div>
          </form>
        </div>

        {applications.length > 0 && (
          <div className="mt-12">

            <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Application Records</h2>
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-700 text-white">
                    <th className="px-5 py-4 text-left">
                      Candidate Name
                    </th>

                    <th className="px-5 py-4 text-left">
                      Email
                    </th>

                    <th className="px-5 py-4 text-left">
                      Skill
                    </th>

                    <th className="px-5 py-4 text-left">
                      Experience
                    </th>

                    <th className="px-5 py-4 text-center">
                      Action
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {applications.map((e, i) => (

                    <tr key={i} className="border-b hover:bg-blue-50 transition duration-300">
                      <td className="px-5 py-4">
                        {e.candidateName}
                      </td>

                      <td className="px-5 py-4">
                        {e.email}
                      </td>

                      <td className="px-5 py-4">
                        {e.skill}
                      </td>

                      <td className="px-5 py-4">
                        {e.experience} Years
                      </td>

                      <td className="px-5 py-4 text-center">
                        <button onClick={() => handleDelete(i)} className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold transition duration-300 shadow-md"> Reject Applicant
                        </button>
                      </td>
                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>
        )}

      </div>
    </div>
  )
}

export default JobApplicationPortal;