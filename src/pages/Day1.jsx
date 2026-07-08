
import StudentProfile from "../day1/StudentProfile";
import EmployeeCard from "../day1/EmployeeCard";
import ProductCard from "../day1/ProductCard";
import MovieDetails from "../day1/MovieDetails";
import CompanyInfo from "../day1/CompanyInfo";
import Footer from "../day1/Footer";
import Navbar from "../components/Navbar"
import PageLayout from "../PageLayout"

const App=()=>{
  return(
  <>
  <PageLayout>
    <div>
      <Navbar/>
    
    <StudentProfile/>
    <EmployeeCard/>
    <ProductCard/>
    <MovieDetails/>
    <CompanyInfo/>
    <Footer/>
    </div>
    </PageLayout>
    </>)
}
export default App;