import { useState } from "react";
const ContactBook = () => {
  const [contactBook, setContactBook] = useState({ UserName: "", UserEmail: "", UserNumber: "", });
  const[storeUser ,setStoreUser]=useState(()=>{
    return JSON.parse(localStorage.getItem("contactbook")) || [];
  })

  const handleEdit = (e) => {
    setContactBook({ ...contactBook, [e.target.name]: e.target.value });
  }

 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contactBook.UserName || !contactBook.UserEmail || !contactBook.UserNumber) {
      alert("Enter All User Data");
      return;
    }

    const localStorageData =JSON.parse(localStorage.getItem("contactbook")) || [];
    const CheckEmail = localStorageData.find((e) => e.UserEmail === contactBook.UserEmail  && e.UserNumber===contactBook.UserNumber)
    if (CheckEmail) {
      alert("Email/Contact Number Already Exists");
      return
    }
    localStorageData.push(contactBook);
     alert("Data Successfully Added in Local Storage")

    localStorage.setItem( "contactbook", JSON.stringify(localStorageData))
    setStoreUser(localStorageData)

    setContactBook({UserName: "",UserEmail: "",UserNumber: "",})

  }

  const handleLogout=(index)=>{
    const updatedContact = storeUser.filter((_, i) => i !== index);
    localStorage.setItem("contactbook",JSON.stringify(updatedContact))
    setStoreUser(updatedContact)
    alert("Contact Deleted Successfully");


  
  }

  return (
    <div className="min-h-screen bg-slate-100 flex  flex-col  gap-10 items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-700"> Contact Book</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium text-gray-700">Full Name</label>
            <input type="text" name="UserName" value={contactBook.UserName} onChange={handleEdit} placeholder="Enter your full name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Email Address</label>
            <input type="email" name="UserEmail" value={contactBook.UserEmail} onChange={handleEdit} placeholder="Enter your email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Mobile Number</label>
            <input type="number" name="UserNumber" value={contactBook.UserNumber} onChange={handleEdit} placeholder="Enter a mobile number" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"/>
          </div>

          <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition">  Save Contact</button>
        </form>
         
        
      </div>

      <div className="mt-10">
      
        {storeUser.length >0 && (
          <div className="mt-10">
          <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Contact Book Records</h2>

     <div className="ml-8 grid gap-4">
      
       
  {storeUser.map((e, i) => (
    <div key={i} className="bg-white shadow-lg rounded-xl p-5 w-72 border">
      <h2 className="text-xl font-bold text-green-700 mb-3"> {e.UserName} </h2>
      <p><span className="font-semibold">Email:</span> {e.UserEmail}</p>
      <p><span className="font-semibold">Mobile:</span> {e.UserNumber} </p>
      <div className="md:col-span-2">
        <button onClick={()=>handleLogout(i)} className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300" >Delete Contact </button>
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

export default ContactBook;