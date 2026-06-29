import { useState } from "react";
const UserRegistration = () => {
  const [userData, setUserData] = useState({ UserName: "", UserEmail: "", UserPassword: "", });
  const[storeUser ,setStoreUser]=useState(()=>{
    return JSON.parse(localStorage.getItem("userInput")) || [];
  })

  const handleEdit = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.UserName || !userData.UserEmail || !userData.UserPassword) {
      alert("Enter All User Data");
      return;
    }

    const localStorageData =JSON.parse(localStorage.getItem("userInput")) || [];
    const CheckEmail = localStorageData.find((e) => e.UserEmail === userData.UserEmail)
    if (CheckEmail) {
      alert("Email Already Exists");
      return
    }
    localStorageData.push(userData);
    localStorage.setItem( "userInput", JSON.stringify(localStorageData))
    setStoreUser(localStorageData)


    alert("Registration Successful");

    setUserData({UserName: "",UserEmail: "",UserPassword: "",})

  }

  const handleDelete=(index)=>{
    const updatedUser=storeUser.filter((_,i)=>i!=index)
    localStorage.setItem("userInput",JSON.stringify(updatedUser))
    setStoreUser(updatedUser);
    alert("User Deleted Successfully")
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-700"> User Registration </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium text-gray-700">Full Name</label>
            <input type="text" name="UserName" value={userData.UserName} onChange={handleEdit} placeholder="Enter your full name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Email Address</label>
            <input type="email" name="UserEmail" value={userData.UserEmail} onChange={handleEdit} placeholder="Enter your email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Password</label>
            <input type="password" name="UserPassword" value={userData.UserPassword} onChange={handleEdit} placeholder="Create a password" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div className="md:col-span-2">
              <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition duration-300" >Register</button>
            </div>

         
        </form>
         
      </div>
      <div>
        {storeUser.length>0 && (
      <div className="m-10">
        <h2 className="text-xl font-bold text-green-700 mb-3">Registered User</h2>
      
     <div className="ml-8 grid gap-4">
  {storeUser.map((e, i) => (
    <div key={i} className="bg-white shadow-lg rounded-xl p-5 border w-72" >
      
      <p><span className="font-semibold">Name:</span> {e.UserName} </p>
      <p><span className="font-semibold">Email:</span> {e.UserEmail}</p>
      <div className="md:col-span-2">
         <button onClick={() => handleDelete(i)} className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">Delete User</button>
      </div>
    </div>
  ))}
</div>
</div>
        )}
</div>

    </div>
  )
}

export default UserRegistration