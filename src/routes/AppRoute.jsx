import { Route ,Routes } from "react-router-dom"
import Day4 from "../pages/Day4"
import Home  from "../pages/Home"

const AppRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/day4" element={<Day4/>}/>
        </Routes>
    </div>
  )
}

export default AppRoute