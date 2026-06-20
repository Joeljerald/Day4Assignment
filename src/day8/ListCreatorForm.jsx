import { useState } from "react";

const ListCreatorForm = () => {
  const [userList, setUserList] = useState("");
  const [productList,setProductList] = useState("");
  const[employeeList,setEmployeeList]=useState("")
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userList === "") return;
    setList([...list,{ userList,productList,employeeList}]);
    setUserList("");
    setProductList("");
    setEmployeeList("");
  };

  return (
    <div className="border-2 mx-80 my-8 bg-white p-6 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-center text-indigo-600">List Handling</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-2">User List Creator</label>
          <input type="text" value={userList} placeholder="Type here" onChange={(e) => setUserList(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        <label className="block font-medium text-gray-700 mb-2">Product List Creator</label>
          <input type="text" value={productList} placeholder="Type here..." onChange={(e) => setProductList(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
            <label className="block font-medium text-gray-700 mb-2">Employee List Creator</label>
          <input type="text" value={employeeList} placeholder="Type here" onChange={(e) => setEmployeeList(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        </div>

        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">Add </button>

      </form>

      <div className="mt-6">

        <h3 className="text-lg font-semibold text-gray-800 mb-3">Added Items</h3>

        {list.length === 0 ? (<p className="text-gray-500">No items added</p>) : (
          list.map((item, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded-lg mb-2 flex justify-between items-center">
            <p><span className="font-semibold">User: </span>{item.userList}</p>
            <p><span className="font-semibold">Product: </span>{item.productList}</p>
            <p><span className="font-semibold">Employee List: </span>{item.employeeList}</p>
            <span className="text-sm text-gray-500">#{index + 1}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default ListCreatorForm;