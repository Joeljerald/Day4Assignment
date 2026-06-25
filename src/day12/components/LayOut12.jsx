import { Outlet } from "react-router-dom"

import Navbar12 from "./Navbar12"


const LayOut12 = () => {
  return (
    <div>
    <Navbar12/>
    <Outlet/>
    </div>
  )
}

export default LayOut12