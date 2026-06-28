import { useState } from "react";

const BookManagement = () => {
  const [library, setLibrary] = useState({bookName: "", authorName:"",Price: ""});
  const [display, setDisplay] = useState(() => {
    return JSON.parse(localStorage.getItem("BookManagement")) || [];
  })

  const handleChange = (e) => {
    setLibrary({ ...library, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!library.bookName || !library.authorName|| !library.Price){
        alert("Enter All Book Details")
        return  
    }
    const local =JSON.parse(localStorage.getItem("BookManagement")) || [];
    local.push(library);
    alert("Book Successfully Added in Local Storage")
    localStorage.setItem("BookManagement",JSON.stringify(local))
    setDisplay(local);
    setLibrary({bookName: "",authorName: "",Price: ""})
  }

  const handleDelete = (index) => {
  const updatedBooks = [...display];

  updatedBooks.splice(index, 1);

  localStorage.setItem("BookManagement", JSON.stringify(updatedBooks));
  setDisplay(updatedBooks);

  alert("Book Deleted Successfully");
};


  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">Book Management System</h1>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Book Name</label>
              <input type="text" placeholder="Enter Book Name" value={library.bookName} name="bookName" onChange={handleChange} className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Author Name</label>
              <input type="text" placeholder="Enter Author Name" value={library.authorName} name="authorName"onChange={handleChange}className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Price</label>
              <input type="number" placeholder="Enter Price" value={library.Price} name="Price" onChange={handleChange} className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400"/>
            </div>

            <div className="md:col-span-2">
              <button type="submit"className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300" >Add Book </button>
            </div>

          </form>

          
        </div>

        <div className="mt-10">
            {display.length > 0 && (
            <div className="mt-10">
          <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Book Management Records</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               
             {display.map((e, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-xl transition">
          <p className="mb-2"><span className="font-semibold">Book Name:</span> {e.bookName}</p>
          <p className="mb-2"><span className="font-semibold">Author:</span> {e.authorName}</p>
          <p><span className="font-semibold">Price:</span> ₹{e.Price}</p>

          <button onClick={() => handleDelete(i)} className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 mt-4">Delete Book</button>
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

export default BookManagement;