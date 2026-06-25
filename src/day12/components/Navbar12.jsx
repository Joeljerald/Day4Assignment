import { Link } from "react-router-dom"
const Navbar12 = () => {
  return (
    <div className="flex justify-between bg-violet-500 h-20">
        <div className="flex w-30 h-20">
            <img src="./lo.jpg" className="rounded-4xl"/>
        </div>
        <div className="text-center py-5 ">
            <h1 className="font-bold text-4xl text-center text-orange-500">Elite Cricket Academy</h1>
        </div>
        <div className="flex gap-10 pl-5 items-center text-white ">
            
            <Link to={"/registerform"} className="bg-black rounded-md  px-4 py-2 " >Register</Link> 
            <Link to={"/loginform"} className="bg-black rounded-md  px-4 py-2 ">Login</Link>
        
            <Link to={"/"} className="bg-black rounded-md  px-4 py-2">Dashboard</Link>
        </div>
    </div>

  )
}

export default Navbar12
