import { Route ,Routes } from "react-router-dom"
import Day4 from "../pages/Day4"
import Home  from "../pages/Home"
import Day5 from "../pages/Day5"

const AppRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/day4" element={<Day4/>}/>
            <Route path="/day5"element={<Day5/>}/>
        </Routes>
    </div>
  )
}

export default AppRoute