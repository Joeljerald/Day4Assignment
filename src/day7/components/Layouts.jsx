import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"


const Layouts = () => {
  return (
    <div>
    <NavBar/>
    <Outlet/>
    </div>
  )
}

export default Layouts