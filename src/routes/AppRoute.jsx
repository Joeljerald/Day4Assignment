import { Route ,Routes } from "react-router-dom"
import Day4 from "../pages/Day4"
import Home  from "../pages/Home"
import Day5 from "../pages/Day5"
import Day3 from "../pages/Day3"
import Day2 from "../pages/Day2"
import Day1 from "../pages/Day1"
import Open from "../day2/pages/Open";
import About from "../day2/pages/About";
import Contact from "../day2/pages/Contact";
import Services from "../day2/pages/Services";
import Login from "../day2/pages/Login";
import Layout from "../day2/components/Layout";
import Register from "../day2/pages/Register";
import Day6 from "../pages/Day6"

const AppRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Layout />}>
          <Route path="/open" element={<Open />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
           <Route path="/day1" element={<Day1/>}/>
            
            <Route path="/day3" element={<Day3/>}/>
            <Route path="/day4" element={<Day4/>}/>
            <Route path="/day5" element={<Day5/>}/>
            <Route path="/day6" element={<Day6/>}/>
          </Route>
           
            <Route path="/login" element={<Login />} />
            <Route path="/day2" element={<Day2/>}/>
            <Route path="/register" element={<Register/>}/>
            
        </Routes>
    </div>
  )
}

export default AppRoute