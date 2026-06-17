const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="w-96 bg-white p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-slate-800">Login</h1>

        <div className="mb-4">
          <label className=" mb-2 font-medium text-slate-700">User Name</label>
          <input type="text" placeholder="Enter your Name"className="w-full border border-slate-300 p-3 rounded-lg outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className=" mb-2 font-medium text-slate-700">Email</label>
          <input type="email" placeholder="Enter your Email" className="w-full border border-slate-300 p-3 rounded-lg outline-none focus:border-blue-500"/>
        </div>

        <div className="mb-6">
          <label className="mb-2 font-medium text-slate-700">Password</label>
          <input type="password" placeholder="Enter your Password" className="w-full border border-slate-300 p-3 rounded-lg outline-none focus:border-blue-500"/>
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 ">Login</button>
        <p className="text-center mt-4 text-slate-600">Don't have an account?
          <span className="text-blue-600 font-medium cursor-pointer ml-1">Register</span>
        </p>
      </div>
    </div>
  );
};
export default Login;