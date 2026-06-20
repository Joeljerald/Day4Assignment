import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <div className="flex justify-between bg-violet-800 h-20">
        <div className="flex w-30 h-20">
            <img src="/src/assets/react.svg" className="rounded-4xl"/>
        </div>
        <div className="text-center py-5 ">
            <h1 className="font-bold text-4xl text-center text-white">React useState Operations Dashboard</h1>
        </div>
        <div className="flex gap-10 pl-5 items-center text-white ">
            
            <Link to={"/obj"} className="bg-black rounded-md  px-4 py-2 " >Object</Link> 
            <Link to={"/array"} className="bg-black rounded-md  px-4 py-2 ">Array</Link>
            <Link to={"/arrofobj"} className="bg-black rounded-md  px-4 py-2  ">Array of Object</Link>
            <Link to={"/"} className="bg-black rounded-md  px-4 py-2">Dashboard</Link>
        </div>
    </div>

  )
}

export default NavBar
