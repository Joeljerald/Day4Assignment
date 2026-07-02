
import StudentProfile from "../day1/StudentProfile";
import EmployeeCard from "../day1/EmployeeCard";
import ProductCard from "../day1/ProductCard";
import MovieDetails from "../day1/MovieDetails";
import CompanyInfo from "../day1/CompanyInfo";
import Footer from "../day1/Footer";
import Navbar from "../components/Navbar"

const App=()=>{
  return(<>
    <div>
      <Navbar/>
    
    <StudentProfile/>
    <EmployeeCard/>
    <ProductCard/>
    <MovieDetails/>
    <CompanyInfo/>
    <Footer/>
    </div>
    </>)
}
export default App;