import { Link, NavLink, useNavigate} from "react-router-dom"
const NavBar=()=>{
    const Navigate=useNavigate();
    const HandleLogin=()=>{
        Navigate("/login")
    }
    const HandleRegister=()=>{
        Navigate("/Register")
    }
    return(
    <div className="flex justify-between bg-pink-200 h-20">
        <div className="flex w-30 h-20">
            <img src="./lo.jpg" className="rounded-4xl"/>
        </div>
        <div className="text-center py-5 ">
            <h1 className="font-bold text-4xl text-center text-slate-800">Elite Cricket Academy</h1>
        </div>
        <div className="flex gap-10 pl-5 items-center text-white ">
            
            <Link to={"/open"} className="bg-black rounded-md  px-4 py-2 " >Home</Link> 
            <Link to={"/about"} className="bg-black rounded-md  px-4 py-2 ">About</Link>
            <Link to={"/contact"} className="bg-black rounded-md  px-4 py-2  ">Contact</Link>
            <Link to={"/services"} className="bg-black rounded-md  px-4 py-2 ">Service</Link>
            <Link to={"/"} className="bg-black rounded-md  px-4 py-2">Dashboard</Link>
            <button className="rounded-md " onClick={HandleLogin}><NavLink to="/" className={({ isActive }) =>`px-4 py-2 text-white rounded-md ${isActive ? "bg-amber-500" : "bg-blue-500"}`}>Login</NavLink></button>
            <button className="rounded-md " onClick={HandleRegister}><NavLink to="/" className={({ isActive }) =>`px-4 py-2 text-white rounded-md ${isActive ? "bg-blue-500":"bg-amber-500"}`}>Register</NavLink></button>

        </div>
    </div>)    
}
export default NavBar