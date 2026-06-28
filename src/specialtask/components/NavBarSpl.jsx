import { Link } from "react-router-dom";

const NavBarSpl = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-violet-700 shadow-lg flex justify-between items-center px-8 z-50">
      <div className="flex items-center gap-4">

        <img src="./forms.jpg" className="w-14 h-14 rounded-xl"/>
        <h1 className="text-4xl font-bold text-yellow-300">Different Types of Form</h1>
      </div>

      <Link to="/" className="bg-slate-900 text-white px-6 py-3 rounded-xl">Dashboard</Link>
    </div>
  )
}

export default NavBarSpl;