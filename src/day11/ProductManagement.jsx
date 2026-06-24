import { useState } from "react";

const ProductManagement = () => {
  const [Product, setProduct] = useState({ProductName: "", Price: "", Category: "", Brand: "" });
  const [display, setDisplay] = useState(() => {
    return JSON.parse(localStorage.getItem("UserData")) || [];
  })

  const handleChange = (e) => {
    setProduct({ ...Product, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!Product.ProductName || !Product.Price|| !Product.Category || !Product.Brand ){
        alert("Enter All Product Data")
    }
    const local =JSON.parse(localStorage.getItem("UserData")) || [];
    local.push(Product);
    alert("Data Successfully Added in Local Storage")
    localStorage.setItem("UserData",JSON.stringify(local))
    setDisplay(local);
    setProduct({ProductName: "",Price: "",Category: "",Brand: ""})
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">Product Management Form</h1>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Product Name</label>
              <input type="text" placeholder="Enter Product Name" value={Product.ProductName} name="ProductName" onChange={handleChange} className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Price</label>
              <input type="number" placeholder="Enter Price" value={Product.Price} name="Price"onChange={handleChange}className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Category</label>
              <input type="text" placeholder="Enter Category" value={Product.Category} name="Category" onChange={handleChange} className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Brand</label>
              <input type="text" placeholder="Enter Brand" value={Product.Brand} name="Brand" onChange={handleChange} className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400"/>
            </div>

            <div className="md:col-span-2">
              <button type="submit"className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300" >Create Product </button>
            </div>

          </form>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {display.map((e, i) => (
            <div key={i} className="bg-emerald-50 border border-emerald-200 rounded-2xl shadow-md p-6">
              <p className="mb-3"> <span className="font-bold text-slate-700">Product Name:</span>{" "}{e.ProductName}</p>
              <p className="mb-3"><span className="font-bold text-slate-700"> Price:</span>{" "}₹{e.Price}</p>
              <p className="mb-3"><span className="font-bold text-slate-700">Category:</span>{" "}{e.Category}</p>
              <p><span className="font-bold text-slate-700">Brand:</span>{" "}{e.Brand}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductManagement;