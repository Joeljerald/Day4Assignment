import useToggle from "../components/useToggle";

const LoginForm = () => {
  const {data, display, showPassword, handleToggle, handleSubmit, handleChange,} = useToggle();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center p-8">
    
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Login Form</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">User Name</label>
            <input  type="text" name="userName" placeholder="Enter Name" value={data.userName} onChange={handleChange}  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input type="email" name="userEmail" placeholder="Enter Email" value={data.userEmail} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div>
            <label className="block mb-2 font-medium">Password</label>

            <div className="flex gap-2">
              <input type={showPassword ? "text" : "password"} name="userPassword" placeholder="Enter Password" value={data.userPassword} onChange={handleChange} className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

              <button type="button" onClick={handleToggle} className="bg-gray-600 hover:bg-gray-700 text-white px-4 rounded-lg transition">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
            Login
          </button>
        </form>
      </div>

      {display.length > 0 && (
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl mt-8">
          <h2 className="text-2xl font-bold text-center text-slate-700 mb-6">Registered Users</h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border px-4 py-3">S.No</th>
                <th className="border px-4 py-3">Name</th>
                <th className="border px-4 py-3">Email</th>
              </tr>
            </thead>

            <tbody>
              {display.map((e, i) => (
                <tr key={i} className="text-center hover:bg-slate-100">
                  <td className="border px-4 py-3">{i + 1}</td>
                  <td className="border px-4 py-3">{e.userName}</td>
                  <td className="border px-4 py-3">{e.userEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default LoginForm