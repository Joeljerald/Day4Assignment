import { useState } from "react";
import Display from "./Display";

const UserData = () => {
  const [userData, setUserData] = useState({UserName: "",UserAge: "",UserCity: "",});
  const [arrData, setArrData] = useState([]);
  const handleClick = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.UserName === "" || userData.UserAge === "" || userData.UserCity === "") {
      alert("Enter all values");
      return;
    }
    setArrData((prev) => [...prev, userData])
    setUserData({UserName: "",UserAge: "",UserCity: ""})
  }

  const handleEdit = (item) => {
    setUserData(item);
  }

  const handleDelete = (id) => {
    setArrData(arrData.filter((_, i) => i !== id));
  }

  return (
    <div className="min-h-screen bg-indigo-500 flex flex-col items-center p-8">
      <div className="w-full max-w-4xl bg-white p-10 rounded-3xl shadow-2xl">
        <form onSubmit={handleSubmit}>
          <table className="mx-auto border-separate border-spacing-y-6">

            <tbody>
              <tr>
                <td colSpan="2" className="text-4xl font-bold text-center text-indigo-600 pb-6">User Form</td>
                </tr>

              <tr>
                <td className="w-56 text-xl font-semibold pr-6 whitespace-nowrap">
                  <label htmlFor="UserName">Enter a Name </label>
                  </td>
                <td>
                  <input type="text" id="UserName" name="UserName" value={userData.UserName} onChange={handleClick} placeholder="Enter your Name" className="w-80 border-2 border-gray-300 rounded-xl p-3 text-lg focus:outline-none focus:border-indigo-500"/>
                </td>
              </tr>

              <tr>
                <td className="w-56 text-xl font-semibold pr-6 whitespace-nowrap">
                  <label htmlFor="UserAge">Enter a Age</label></td>

                <td>
                  <input type="number" id="UserAge" name="UserAge" value={userData.UserAge} onChange={handleClick} placeholder="Enter your Age" className="w-80 border-2 border-gray-300 rounded-xl p-3 text-lg focus:outline-none focus:border-indigo-500"/>
                </td>
              </tr>

              <tr>
                <td className="w-56 text-xl font-semibold pr-6 whitespace-nowrap">
                  <label htmlFor="UserCity">Enter a City</label>
                </td>

                <td>
                  <input type="text" id="UserCity" name="UserCity" value={userData.UserCity} onChange={handleClick} placeholder="Enter your City" className="w-80 border-2 border-gray-300 rounded-xl p-3 text-lg focus:outline-none focus:border-indigo-500"/>
                </td>
              </tr>

              <tr>
                <td colSpan="2" className="pt-6 text-center">

                  <button type="submit" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-700 hover:scale-105 transition duration-300"> Create</button>
                </td>
              </tr>
            </tbody>
          </table>

        </form>

      </div>

      <div className="w-full mt-8">
        <Display datas={arrData} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </div>

    </div>
  );
};

export default UserData;