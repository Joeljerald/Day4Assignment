import { Outlet } from "react-router-dom"

import Navbar19 from "../pages/Navbar19"


const Layout19 = () => {
  return (
    <div>
    <Navbar19/>
    <Outlet/>
    </div>
  )
}

export default Layout19