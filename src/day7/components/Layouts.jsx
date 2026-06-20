import { Outlet } from "react-router-dom"
import Navbar from "./NavBar"


const Layouts = () => {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    </div>
  )
}

export default Layouts