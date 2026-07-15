import { useReducer, useState } from "react";

const datas = [];

const reduce = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload]

    case "DEL":
      return state.filter((e) => e.userId !== action.payload)

    case "UPDATE":
      return state.map((e) => e.userId === action.payload.userId ? { ...e, userData: action.payload.userData } : e)

    case "COMPLETE":
      return state.map((e) =>e.userId === action.payload? { ...e, completed: !e.completed }: e)

    case "RESET":
      return []

    default:
      return state;
  }
}

const TodoReducer = () => {
  const [todo, dispatch] = useReducer(reduce, datas);
  const [userData, setUserData] = useState("");
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setUserData(e.target.value)
  }

  const handleAdd = () => {
    if (userData.trim() === "") {
      alert("Please enter a todo")
      return
    }

    dispatch({
      type: "ADD",
      payload: {
        userId: Date.now(),
        userData,
        completed: false,
      },
    })

    setUserData("");
  }

  const handleEdit = (data) => {
    setUserData(data.userData);
    setEditId(data.userId);
  }

  const handleUpdate = () => {
    if (userData.trim() === "") {
      alert("Please enter a todo")
      return
    }

    dispatch({
      type: "UPDATE",
      payload: {
        userId: editId,
        userData,
      },
    })

    setUserData("");
    setEditId(null);
  }

  const handleDelete = (id) => {
    dispatch({
      type: "DEL",
      payload: id,
    })
  }

  const handleComplete = (id) => {
    dispatch({
      type: "COMPLETE",
      payload: id,
    })
  }

  const handleReset = () => {
    dispatch({
      type: "RESET",
    })

    setUserData("");
    setEditId(null);
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">Todo Application</h1>

        <div className="flex gap-3 mb-6">
          <input type="text" placeholder="Enter Todo" value={userData} onChange={handleChange} className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>

          {editId === null ? (
            <button onClick={handleAdd} className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg">
              Add
            </button>
          ) : (
            <button onClick={handleUpdate} className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
              Update
            </button>
          )}

          <button onClick={handleReset} className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg">
            Reset
          </button>
        </div>

        {todo.length === 0 ? (
          <p className="text-center text-gray-500">No Todos Available</p>
        ) : (
          <div className="space-y-4">
            {todo.map((e) => (
              <div key={e.userId} className="flex justify-between items-center bg-gray-100 rounded-lg p-4 shadow-sm">
                <div>
                  <h2 className={`text-lg font-semibold ${ e.completed ? "line-through text-green-600" : "text-black"}`}>
                    {e.userData}
                  </h2>

                  <p className={`text-sm ${ e.completed ? "text-green-600" : "text-gray-500"}`}>
                    {e.completed ? "Completed" : "Pending"}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button onClick={() => handleComplete(e.userId)} className={`px-3 py-2 rounded-lg text-white ${ e.completed ? "bg-orange-500 hover:bg-orange-600" : "bg-blue-600 hover:bg-blue-700"}`}>
                    {e.completed ? "Undo" : "Complete"}
                  </button>

                  <button onClick={() => handleEdit(e)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg">
                    Edit
                  </button>

                  <button onClick={() => handleDelete(e.userId)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoReducer