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
import Day7 from "../pages/Day7"
import ObjectArray from "../day7/pages/ObjectArray"
import ArrayOfObject from "../day7/pages/ArrayOfObject"
import Array from "../day7/pages/Array"
import Layouts from "../day7/components/Layouts"
import Day8 from "../pages/Day8"
import Day9 from "../pages/Day9"
import Day10 from "../pages/Day10"
import Day11 from "../pages/Day11"


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
            <Route path="/day8" element={<Day8/>}/>
            <Route path="/day9" element={<Day9/>}/>
            <Route path="/day10" element={<Day10/>}/>
            <Route path="/day11" element={<Day11/>}/>
          </Route>
          <Route path="/" element={<Layouts/>}>
             <Route path="/obj" element={<ObjectArray/>}/>
          <Route path="/array" element={<Array/>}/>
          <Route path="/arrofobj" element={<ArrayOfObject/>}/>
          </Route>
           
            <Route path="/login" element={<Login />} />
            <Route path="/day2" element={<Day2/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/day7" element={<Day7/>}/>
            
        </Routes>
    </div>
  )
}

export default AppRoute