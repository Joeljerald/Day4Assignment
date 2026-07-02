import {useEffect, useState } from "react"

const Filter = () => {
     const[getProduct,setGetProduct]=useState([])
    const [unicat,setUniCat]=useState([])
   
    const[cat,setCat]=useState("")
    const[search,setSearch]=useState("")
    const[sort,setSort]=useState("")
    const [loading, setLoading] = useState(true);

    const handlechange=(e)=>{
        setCat(e.target.value)
    }

    const handleSearch=(e)=>{
        setSearch(e.target.value)

    }
    const handleSort=(e)=>{
        setSort(e.target.value)
    }

    let storeData=[...getProduct]

//     const groupedProducts = storeData.reduce((acc, product) => {
//   if (!acc[product.category]) {
//     acc[product.category] = [];
//   }

//   acc[product.category].push(product);

//   return acc;
// }, {});

    if(search){
        storeData = storeData.filter((e) =>e.title.toLowerCase().includes(search.toLowerCase()))
    }

    if(cat){
        storeData = storeData.filter((e) => e.category === cat);

    }
    

    if(sort){
        if(sort=="asc"){
            storeData=storeData.sort((a,b)=>a.price - b. price)
        }
        else if(sort=="des"){
            storeData=storeData.sort((a,b)=>b.price - a. price)
        }
    }


    useEffect(()=>{
        const FetchData=async()=>{
        try{ 
            setLoading(true);
            const data=await fetch("https://dummyjson.com/products");
            const res=await data.json();
            setGetProduct(res.products)
            const cat=res.products.map((e)=>e.category)
          
            const uniqueCategory=[...new Set(cat)]
    
            setUniCat(uniqueCategory)
            }
            catch(err){
                console.log("Error",err)
            }
             finally {
                setLoading(false);
                    }
    }
    FetchData();
    },[])

    return (
  <div className="min-h-screen bg-gray-100 py-10 px-5">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Product Filter</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 flex flex-wrap justify-center gap-4">
        <select onChange={handlechange} className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select Category</option>
          {unicat.map((e, i) => (
            <option key={i} value={e}>{e}</option>
          ))}
        </select>

        <select onChange={handleSort} className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select Price</option>
          <option value="asc">Low - High</option>
          <option value="des">High - Low</option>
        </select>

        <input type="text" placeholder="Search Product..." onChange={handleSearch} className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
        <h1 className="text-3xl font-bold text-blue-600">Loading...</h1>
        </div>) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {storeData.map((e) => (
        <div key={e.id} className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <h2 className="text-xl font-bold text-gray-800 mb-3">{e.title}</h2>
        <p className="text-gray-600 mb-2"> <span className="font-semibold">Category:</span> {e.category}</p>
        <p className="text-green-600 font-bold text-lg">${e.price}</p>
    </div>
    ))}
  </div>
    )}
    </div>
  </div>
)
}

export default Filter