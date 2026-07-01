import { useState } from "react";

const SearchApp = () => {

  const students = [
    {
      id: 1,
      type: "Student",
      name: "Sudhan",
      age: 20,
      course: "React Developer",
      city: "Chennai",
    },
    {
      id: 2,
      type: "Student",
      name: "Sudhakar",
      age: 21,
      course: "MERN Stack",
      city: "Madurai",
    },
    {
      id: 3,
      type: "Student",
      name: "Joel",
      age: 22,
      course: "Java Developer",
      city: "Salem",
    },
    {
      id: 4,
      type: "Student",
      name: "Arun",
      age: 23,
      course: "Python Developer",
      city: "Coimbatore",
    },
  ];


  const products = [
    {
      id: 5,
      type: "Product",
      name: "Laptop",
      brand: "Dell",
      price: "₹65,000",
    },
    {
      id: 6,
      type: "Product",
      name: "Laptop Stand",
      brand: "HP",
      price: "₹1,200",
    },
    {
      id: 7,
      type: "Product",
      name: "Mouse",
      brand: "Logitech",
      price: "₹800",
    },
    {
      id: 8,
      type: "Product",
      name: "Keyboard",
      brand: "Zebronics",
      price: "₹1,500",
    },
  ];

  const employees = [
    {
      id: 9,
      type: "Employee",
      name: "Ravi",
      department: "HR",
      salary: "₹35,000",
    },
    {
      id: 10,
      type: "Employee",
      name: "Ramesh",
      department: "Developer",
      salary: "₹60,000",
    },
    {
      id: 11,
      type: "Employee",
      name: "Priya",
      department: "Designer",
      salary: "₹50,000",
    },
    {
      id: 12,
      type: "Employee",
      name: "Arun",
      department: "Tester",
      salary: "₹45,000",
    },
  ];

  const courses = [
    {
      id: 13,
      type: "Course",
      name: "React",
      duration: "3 Months",
      trainer: "Bala",
    },
    {
      id: 14,
      type: "Course",
      name: "React Native",
      duration: "4 Months",
      trainer: "Ajay",
    },
    {
      id: 15,
      type: "Course",
      name: "Python",
      duration: "3 Months",
      trainer: "Hari",
    },
    {
      id: 16,
      type: "Course",
      name: "Java",
      duration: "5 Months",
      trainer: "Kumar",
    },
  ];


  const allData = [
    ...students,
    ...products,
    ...employees,
    ...courses,
  ];

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categoryData =category === "All"? allData: allData.filter((i) => i.type === category);

  const filteredData = categoryData.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-10">

          <h1 className="text-5xl font-extrabold text-center text-gray-900">
             Searching and Category
          </h1>

          <p className="text-center text-gray-500 mt-4 text-lg">
            Search Students, Products, Employees and Courses
            from one place.
          </p>


          <div className="mt-10 flex flex-col md:flex-row gap-5">

            <select value={category} onChange={(e) => { setCategory(e.target.value); setSearch("");}}
              className="h-14 md:w-64 rounded-xl border border-gray-300 px-5 outline-none focus:border-blue-500" >
              <option>All</option>
              <option>Student</option>
              <option>Product</option>
              <option>Employee</option>
              <option>Course</option>
            </select>

            <input type="text" placeholder={`Search ${category}...`} value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 h-14 rounded-xl border border-gray-300 px-5 outline-none focus:border-blue-500"/>

          </div>

          <div className="mt-8 flex justify-between items-center border-t pt-6">

            <div>

              <h2 className="text-3xl font-bold text-gray-900">{category}</h2>
              <p className="text-gray-500">  Showing {filteredData.length} Results </p>

            </div>
            <div className="bg-black text-white px-5 py-2 rounded-full">
              Live Search
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300" >
              <div className="flex justify-between items-center p-5 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                    {item.type === "Student" && "🎓"}
                    {item.type === "Product" && "💻"}
                    {item.type === "Employee" && "👨‍💼"}
                    {item.type === "Course" && "📚"}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{item.name}</h2>
                    <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{item.type}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {item.type === "Student" && (
                  <>
                    <p className="text-gray-600 mb-3"><span className="font-semibold">Age :</span> {item.age}</p>
                    <p className="text-gray-600 mb-3"><span className="font-semibold">Course :</span> {item.course}</p>
                    <p className="text-gray-600"><span className="font-semibold">City :</span> {item.city}</p>
                  </>
                )}

                {item.type === "Product" && (
                  <>
                    <p className="text-gray-600 mb-3"><span className="font-semibold">Brand :</span> {item.brand}</p>
                    <p className="text-3xl font-bold text-blue-600">{item.price}</p>
                  </>
                )}

                {item.type === "Employee" && (
                  <>
                    <p className="text-gray-600 mb-3">
                      <span className="font-semibold">Department :</span>{" "}{item.department}</p>
                    <p className="text-3xl font-bold text-green-600">{item.salary}</p>
                  </>
                )}

                {item.type === "Course" && (
                  <>
                    <p className="text-gray-600 mb-3"><span className="font-semibold">Duration :</span>{" "}{item.duration}</p>
                    <p className="text-gray-600"><span className="font-semibold">Trainer :</span>{" "}{item.trainer}</p>
                  </>
                )}

                <button className="mt-8 w-full bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition">View Details\</button>
              </div>
            </div>
          ))}
          {filteredData.length === 0 && (
            <div className="col-span-full flex justify-center items-center py-20">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-10 w-full max-w-md text-center">
                <div className="text-6xl mb-5">🔍</div>
                <h2 className="text-3xl font-bold text-gray-800">No Results Found</h2>
                <p className="text-gray-500 mt-3">No matching results for</p>
                <p className="font-semibold text-lg mt-2">"{search}"</p>
                <button onClick={() => setSearch("")} className="mt-8 bg-slate-900 text-white px-8 py-3 rounded-xl hover:bg-slate-800 transition">Clear Searc </button>
              </div>
            </div>
          )}
        </div>
        {filteredData.length === 0 && (
          <div className="col-span-full flex justify-center items-center py-20">

            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-10 w-full max-w-md text-center">

              <div className="text-6xl mb-5">
                🔍
              </div>

              <h2 className="text-3xl font-bold text-gray-800">No Results Found</h2>
              <p className="text-gray-500 mt-3">No matching results for</p>
              <p className="font-semibold text-lg mt-2">"{search}"</p>
              <button onClick={() => setSearch("")} className="mt-8 bg-slate-900 text-white px-8 py-3 rounded-xl hover:bg-slate-800 transition">
                Clear Search
              </button>

            </div>

          </div>
        )}

      </div>

    </div>

  )
}

export default SearchApp