import { useMemo, useState } from "react";

const Operation = (search, storeData, sort) => {
  storeData = storeData.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  )

  if (sort === "asc") {
    storeData = storeData.sort((a, b) => a.price - b.price);
  } 
  else if (sort === "desc") {
    storeData = storeData.sort((a, b) => b.price - a.price);
  }

  return storeData;
}

const ProductMemo = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 50000,
      inStock: true,
    },
    {
      id: 2,
      name: "Mobile",
      category: "Electronics",
      price: 25000,
      inStock: false,
    },
    {
      id: 3,
      name: "Shoes",
      category: "Fashion",
      price: 3000,
      inStock: true,
    },
    {
      id: 4,
      name: "T-Shirt",
      category: "Fashion",
      price: 1000,
      inStock: true,
    },
    {
      id: 5,
      name: "Watch",
      category: "Accessories",
      price: 4500,
      inStock: false,
    },
    {
      id: 6,
      name: "Headphones",
      category: "Electronics",
      price: 2000,
      inStock: true,
    },
  ];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [theme, setTheme] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const storeData = [...products]

  const datas = useMemo(() => {
    return Operation(search, storeData, sort);
  }, [search, sort]);

  const handleClick = () => {
    setTheme(!theme);
  };

  return (
    <div
      className={theme? "min-h-screen bg-slate-900 text-white p-8 transition-all duration-500": "min-h-screen bg-sky-100 text-gray-900 p-8 transition-all duration-500"}>
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold">Product Search & Sort Dashboard</h1>

          <button onClick={handleClick} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition">
            Change Theme
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Search Product..." onChange={handleSearch} className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"/>

            <select onChange={handleSort} className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Sort Price</option>
              <option value="asc">Low - High</option>
              <option value="desc">High - Low</option>
            </select>
          </div>
        </div>

    

 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {datas.map((e) => (
            <div key={e.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 border-l-4 border-indigo-600">

              <h2 className="text-2xl font-bold text-indigo-700 mb-4">{e.name}</h2>

              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Product ID:</span> {e.id}
                </p>

                <p>
                  <span className="font-semibold">Category:</span> {e.category}
                </p>

                <p>
                  <span className="font-semibold">Price:</span>{" "}
                  <span className="text-green-600 font-bold">₹ {e.price.toLocaleString()}</span>
                </p>

                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  <span className={e.inStock? "text-green-600 font-semibold": "text-red-600 font-semibold"}>
                    {e.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductMemo