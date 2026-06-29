import { useEffect, useState } from "react";

const UserDataFetch = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const takeData = await fetch("https://jsonplaceholder.typicode.com/users")
        console.log(takeData);
        const parsing = await takeData.json();
        console.log(parsing);
        setShow(parsing);
      } 
      catch (error) {
        console.log("Error", error);
      }
    }

    fetchData();
  }, [])

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-6">User List</h1>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
       {show.length === 0 ? (
    <div className="col-span-2 flex justify-center items-center h-60">
      <p className="text-3xl font-bold text-blue-600 animate-pulse">Loading...</p>
    </div>
     ) : (
    show.map((user) => (
      <div key={user.id} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
        <h2 className="text-2xl font-bold text-blue-600">{user.name}</h2>
        <p className="text-gray-600 mt-2"> <span className="font-semibold">Email:</span> {user.email}</p>
        <p className="text-gray-600 mt-2"><span className="font-semibold">Phone:</span> {user.phone}</p>
        <p className="text-gray-600 mt-2"><span className="font-semibold">Website:</span> {user.website}</p>
        <p className="text-gray-600 mt-2"><span className="font-semibold">Company:</span> {user.company.name}</p>
      </div>
    ))
  )}
</div>  
</div>
  );
};

export default UserDataFetch;