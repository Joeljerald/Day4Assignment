import { useState } from "react";

const VehicleRegistration = () => {
  const [vehicle, setVehicle] = useState({vehicleNumber: "",ownerName: "",vehicleType: "", });
  const [vehicles, setVehicles] = useState(() => {
    return JSON.parse(localStorage.getItem("VehicleData")) || [];
  })

  const handleChange = (e) => {
    setVehicle({...vehicle,[e.target.name]: e.target.value,});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!vehicle.vehicleNumber ||!vehicle.ownerName ||!vehicle.vehicleType) {
      alert("Enter All Vehicle Details");
      return;
    }

    const localData =JSON.parse(localStorage.getItem("VehicleData")) || [];
    const checkVehicle = localData.find((e) => e.vehicleNumber === vehicle.vehicleNumber)

    if (checkVehicle) {
      alert("Vehicle Number Already Exists");
      return;
    }

    localData.push(vehicle);

    localStorage.setItem("VehicleData",JSON.stringify(localData))
    setVehicles(localData);
    alert("Vehicle Registered Successfully");

    setVehicle({vehicleNumber: "",ownerName: "",vehicleType: ""})
  }

  const handleDelete=(index)=>{
    const updatedVechile=vehicles.filter((_,i)=>i!==index)
    localStorage.setItem("VehicleData",JSON.stringify(updatedVechile))
    setVehicles(updatedVechile);
    alert("Vehicle deleted Successfully")
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Vehicle Registration System</h1>

          <form onSubmit={handleSubmit}className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-semibold mb-2">Vehicle Number</label>
              <input type="text" name="vehicleNumber" value={vehicle.vehicleNumber} onChange={handleChange} placeholder="Enter Vehicle Number" className="border rounded-lg p-3"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2"> Owner Name</label>
              <input type="text" name="ownerName" value={vehicle.ownerName} onChange={handleChange} placeholder="Enter Owner Name"  className="border rounded-lg p-3"/>
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold mb-2">Vehicle Type</label>

              <select name="vehicleType" value={vehicle.vehicleType} onChange={handleChange} className="border rounded-lg p-3">
                <option value="">Select Vehicle Type</option>
                <option value="Bike">Bike</option>
                <option value="Car">Car</option>
                <option value="Bus">Bus</option>
                <option value="Truck">Truck</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <button type="submit"className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">  Register Vehicle</button>
            </div>
          </form>
           
        </div>

        <div className="mt-10">

        {vehicles.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Registered Vehicle</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {vehicles.map((e, index) => (
              <div key={index}className="bg-white rounded-xl shadow-lg p-6 border" >
                <h2 className="text-xl font-bold text-blue-700 mb-4">{e.vehicleNumber}</h2>
                <p className="mb-2"><span className="font-semibold"> Owner:</span>{" "}{e.ownerName}</p>
                <p><span className="font-semibold">Type:</span>{" "}{e.vehicleType}</p>
                <div className="md:col-span-2">
              <button onClick={()=>handleDelete(index)} className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300" >Delete Vehicle </button>
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

export default VehicleRegistration;