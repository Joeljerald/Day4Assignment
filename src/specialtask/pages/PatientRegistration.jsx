import { useState } from "react";

const PatientRegistration = () => {
  const [patient, setPatient] = useState({patientName: "",age: "",disease: "",doctorName: "",})

  const [patients, setPatients] = useState(() => {
    return JSON.parse(localStorage.getItem("PatientData")) || [];
  });

  const handleChange = (e) => {
    setPatient({...patient,[e.target.name]: e.target.value,})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patient.patientName ||!patient.age ||!patient.disease || !patient.doctorName) {
      alert("Enter All Patient Details");
      return
    }

    const localData =JSON.parse(localStorage.getItem("PatientData")) || [];
    if (Number(patient.age) <= 0) {
        alert("Age must be greater than 0");
      return;
    }
    const checkPatient = localData.find((e) =>e.patientName === patient.patientName &&e.doctorName === patient.doctorName)
    if (checkPatient) {
      alert("Patient Already Registered");
      return
  }

    localData.push(patient);

    localStorage.setItem("PatientData",JSON.stringify(localData))

    setPatients(localData);

    alert("Patient Registered Successfully");

    setPatient({patientName: "",age: "",disease: "",doctorName: "",})
  }

  const handleLogout=(items)=>{
    const updatedPatient=patients.filter((_,i)=>i!=items)
    localStorage.setItem("PatientData",JSON.stringify(updatedPatient));
    setPatients(updatedPatient);
    alert("Patient removed Successfully")
    }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-red-600 mb-8">Hospital Patient Registration</h1>

          <form onSubmit={handleSubmit}className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-semibold mb-2">Patient Name</label>
              <input type="text" name="patientName" value={patient.patientName}  onChange={handleChange} placeholder="Enter Patient Name" className="border rounded-lg p-3"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2">Age</label>
              <input type="number" name="age" value={patient.age} onChange={handleChange} placeholder="Enter Age" className="border rounded-lg p-3"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2">Disease</label>
              <input type="text" name="disease"   value={patient.disease} onChange={handleChange} placeholder="Enter Disease" className="border rounded-lg p-3"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2">Doctor Name</label>
              <input type="text" name="doctorName"  value={patient.doctorName}  onChange={handleChange}  placeholder="Enter Doctor Name"  className="border rounded-lg p-3"/>
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"> Register Patient</button>
            </div>
          </form>
           
        </div>

        <div className="mt-10">

        {patients.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Patient Records</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {patients.map((p, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border p-6">
                <h2 className="text-xl font-bold text-red-600 mb-4"><h2 className="text-xl font-bold text-red-600 border-b pb-2 mb-4">{p.patientName}</h2></h2>
                <p className="mb-2"><span className="font-semibold">Age:</span> {p.age}</p>
                <p className="mb-2"><span className="font-semibold">Disease:</span> {p.disease}</p>
                <p><span className="font-semibold">Doctor:</span> {p.doctorName}</p>
                <div className="md:col-span-2">
              <button onClick={()=>handleLogout(index)} className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300" >Remove Patient</button>
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

export default PatientRegistration