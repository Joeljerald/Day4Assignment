import { useReducer, useState } from "react";

let datas = [];

const reduce = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload]

    case "DEL":
      return state.filter((e) => e.userId !== action.payload)

    case "UPDATE":
      return state.map((e) =>e.userId === action.payload.userId ? {...e,userName: action.payload.userName,userEmail: action.payload.userEmail}: e)

    default:
      return state
  }
}

const FormReduce = () => {
  const [userData, dispatch] = useReducer(reduce, datas);

  const [user, setUser] = useState({userName: "",userEmail: ""})

  const [edit, editId] = useState(null);

  const handleChange = (e) => {
    setUser({ ...user,[e.target.name]: e.target.value,})
  }

  const handleAdd = () => {
    if (!user.userName || !user.userEmail) {
      alert("Please fill all fields");
      return
    }

    dispatch({
      type: "ADD",
      payload: {
        userId: Date.now(),
        userName: user.userName,
        userEmail: user.userEmail,
      },
    })

    setUser({userName: "",userEmail: ""})
  }

  const handleEdit = (data) => {
    setUser({ userName: data.userName, userEmail: data.userEmail,})
    editId(data.userId);
  }

  const handleDelete = (id) => {
    dispatch({
      type: "DEL",
      payload: id,
    })
  }

  const handleUpdate = () => {
    dispatch({
      type: "UPDATE",
      payload: {
        userId: edit,
        userName: user.userName,
        userEmail: user.userEmail,
      }
    })

    setUser({userName: "", userEmail: ""})
    editId(null);
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">User Management</h1>

        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="userName" placeholder="Enter Name" value={user.userName} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>

          <input type="email" name="userEmail" placeholder="Enter Email" value={user.userEmail} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
        </div>

        <div className="mt-6">
          {edit === null ? (<button onClick={handleAdd} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"> Add User</button>
          ) : (
            <button onClick={handleUpdate} className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
              Update User
            </button>
          )}
        </div>

        <div className="mt-8 space-y-4">
          {userData.length === 0 ? (
            <p className="text-center text-gray-500">No users added yet.</p>
          ) : (
            userData.map((e) => (
              <div key={e.userId} className="flex justify-between items-center bg-gray-50 border rounded-lg p-5 shadow-sm">
                <div>

                  <h2 className="text-lg font-semibold text-gray-800">{e.userName}</h2>
                  <p className="text-gray-500">{e.userEmail}</p>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => handleEdit(e)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
                    Edit
                  </button>

                  <button onClick={() => handleDelete(e.userId)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default FormReduce;