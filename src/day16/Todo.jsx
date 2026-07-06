import { useEffect, useState } from "react";

function Todo() {
const [userName, setUserName] = useState("");
const [mobile, setMobile] = useState("");
const [email, setEmail] = useState("")
const [todos, setTodos] = useState(() => {
  return JSON.parse(localStorage.getItem("todos")) || []
})

const [editId, setEditId] = useState(null)

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
},[todos])

const handleSubmit = (e) => {
  e.preventDefault();

  if (!userName || !mobile || !email) {
    alert("Please fill all fields")
    return
  }

  if (editId !== null) {
    const updated = todos.map((item) =>
      item.id === editId ? { ...item,userName,mobile,email}: item
    )
    setTodos(updated);
    setEditId(null);
  } else {
    const newTodo = {
    id: Date.now(),userName,mobile,email}
    setTodos([...todos, newTodo]);
  }

  setUserName("");
  setMobile("");
  setEmail("");
}

const handleDelete = (id) => {
  const updated = todos.filter((item) => item.id !== id);
  setTodos(updated)
}

const handleEdit = (item) => {
  setUserName(item.userName)
  setMobile(item.mobile)
  setEmail(item.email)
  setEditId(item.id)
}

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-10">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-4 gap-4 mb-6">
          <input type="text" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)}   className="border p-2 rounded"/>
          <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} className="border p-2 rounded"/>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded"/>

          <button type="submit" className={`rounded text-white ${editId !== null? "bg-yellow-500 hover:bg-yellow-600": "bg-blue-600 hover:bg-blue-700"}`}>
            {editId !== null ? "Update" : "Add"}
          </button>
        </form>
        {todos.length > 0 && (
        <table className="w-full border mt-8">
            <thead className="bg-blue-600 text-white">
            <tr>
                <th className="border p-2">S.No</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Mobile</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Action</th>
            </tr>
            </thead>

        <tbody>
        {todos.map((item, index) => (
        <tr key={item.id}>
          <td className="border p-2 text-center">{index + 1}</td>
          <td className="border p-2">{item.userName}</td>
          <td className="border p-2">{item.mobile}</td>
          <td className="border p-2">{item.email}</td>

          <td className="border p-2 text-center">
            <button type="button" onClick={() => handleEdit(item)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
              Edit
            </button>

            <button type="button" onClick={() => handleDelete(item.id)} className="bg-red-600 text-white px-3 py-1 rounded">
              Delete
            </button>
          </td>
        </tr>
        ))}
        </tbody>
    </table>
    )}
    </div>
    </div>
  );
}

export default Todo;