import { useState } from "react";

const ProductSystem = () => {
  const [Product, setProduct] = useState({ProductName: "", Price: "", Category: "", Brand: "" });
  const [display, setDisplay] = useState(() => {
    return JSON.parse(localStorage.getItem("productdata")) || [];
  })

  const handleChange = (e) => {
    setProduct({ ...Product, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!Product.ProductName || !Product.Price|| !Product.Category || !Product.Brand ){
        alert("Enter All Product Data")
        return
    }
    const local =JSON.parse(localStorage.getItem("productdata")) || [];
    local.push(Product);
    alert("Product Details Successfully Added in Local Storage")
    localStorage.setItem("productdata",JSON.stringify(local))
    setDisplay(local);
    setProduct({ProductName: "",Price: "",Category: "",Brand: ""})
  }

  const handleDelete=(index)=>{
    const updatedProduct=display.filter((_,i)=>i!=index)
    localStorage.setItem("productdata",JSON.stringify(updatedProduct))
    setDisplay(updatedProduct);
    alert("Product removed successfully")
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
              <label className="font-semibold mb-2 text-slate-700">Category</label>
              <input type="text" placeholder="Enter Category" value={Product.Category} name="Category" onChange={handleChange} className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400"/>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Brand</label>
              <input type="text" placeholder="Enter Brand" value={Product.Brand} name="Brand" onChange={handleChange} className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400"/>
            </div>

             <div className="flex flex-col">
              <label className="font-semibold mb-2 text-slate-700">Price</label>
              <input type="number" placeholder="Enter Price" value={Product.Price} name="Price"onChange={handleChange}className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400"/>
            </div>

            <div className="md:col-span-2">
              <button type="submit"className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300" >Create Product </button>
            </div>

          </form>
          
        </div>

        <div className="mt-10">
            {display.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Product Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               
             {display.map((e, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-indigo-600 mb-4"><span className="font-semibold">Product Name:</span>{e.ProductName}</h2>
      
          <p className="mb-2"><span className="font-semibold">Category:</span> {e.Category}</p>
          <p><span className="font-semibold">Brand:</span> {e.Brand}</p>
          <p className="mb-2"><span className="font-semibold">Price:</span> ₹{e.Price}</p>

           <div className="md:col-span-2">
              <button onClick={()=>handleDelete(i)} className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300" >Remove Product </button>
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

export default ProductSystem;