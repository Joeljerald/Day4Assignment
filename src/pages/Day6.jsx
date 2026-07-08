import Age from "../Day6/Age"
import AttandaceTracker from "../Day6/AttandaceTracker"
import BankBalance from "../Day6/BankBalance"
import Count from "../Day6/Count"
import CourseSelection from "../Day6/CourseSelection"
import EmployeeStatus from "../Day6/EmployeeStatus"
import LoginStatus from "../Day6/LoginStatus"
import NameUpdate from "../Day6/NameUpdate"
import Profile from "../Day6/Profile"
import ProductDetails from "../Day6/ProductDetails"
import SalaryUpdate from "../Day6/SalaryUpdate"
import ShowHide from "../Day6/ShowHide"
import ThemeChange from "../Day6/ThemeChange"
import UpdateNumber from "../Day6/UpdateNumber"
import UserData from "../Day6/UserData"
import Navbar from "../components/Navbar"
import PageLayout from "../PageLayout"

const Day6 = () => {
  return (
    <>
    <PageLayout>
      <Navbar/>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-4">
    
    <Age/>
    <AttandaceTracker/>
    <BankBalance/>
    <Count/> 
    <CourseSelection/>
    <EmployeeStatus/>
    <LoginStatus/>
    <NameUpdate/>
    <ProductDetails/>
    <Profile/>
    <SalaryUpdate/>
    <ShowHide/>
    <ThemeChange/>
    <UpdateNumber/>
    <UserData/>
    </div>
    </PageLayout>
    </>
  )
}

export default Day6