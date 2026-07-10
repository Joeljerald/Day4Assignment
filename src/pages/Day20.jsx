import Navbar from "../components/Navbar"
import Counter from "../day20/pages/Counter"
import Counter1 from "../day20/pages/Counter1"
import Fetch from "../day20/pages/Fetch"
import Local from "../day20/pages/Local"
import LoginForm from "../day20/pages/LoginForm"
import Search from "../day20/pages/Search"
import PageLayout from "../PageLayout"

const Day20 = () => {
  return (
    <>
    <PageLayout>
    <Navbar/>
    <div className="flex flex-col items-center gap-10">
    <Counter/>
    <Counter1/>
    </div>
    
    <Fetch/>
    <Local/>
    <LoginForm/>
    <Search/>
    </PageLayout>
    
    
    
    
    </>
  )
}

export default Day20