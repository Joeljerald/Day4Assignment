import { Outlet } from "react-router-dom"


import Navbar24 from "./Navbar24"


const LayOut24 = () => {
  return (
    <div>
    <Navbar24/>
    <Outlet/>
    </div>
  )
}

export default LayOut24