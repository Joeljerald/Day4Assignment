import Navbar from "../components/Navbar"
import AuthMain from "../day9/day9Main/AuthMain"
import CountMain from "../day9/day9Main/CountMain"
import LoadingMain from "../day9/day9Main/LoadingMain"
import NumberMain from "../day9/day9Main/NumberMain"
import UpperMain from "../day9/day9Main/UpperMain"
import UserMain from "../day9/day9Main/UserMain"

const Day9 = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-blue-500">
    <h1 className=" p-3 hover:scale-105 transition duration-300"><LoadingMain/></h1>
    <h1 className=" p-3 m-50 hover:scale-105 transition duration-300"><UserMain/></h1>
    <h1 className=" p-3 m-50 hover:scale-105 transition duration-300"><UpperMain/></h1>
    <h1 className=" p-3 m-50 hover:scale-105 transition duration-300"><CountMain/></h1>
    <h1 className=" p-3 m-50 hover:scale-105 transition duration-300"><AuthMain/></h1>
    <h1 className=" p-3 m-auto hover:scale-105 transition duration-300"><NumberMain/></h1>
    
    </div>
    </>
  )
}

export default Day9