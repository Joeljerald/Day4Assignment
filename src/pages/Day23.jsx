import Navbar from "../components/Navbar"
import CountReduce from "../day23/CountReduce"
import FormReduce from "../day23/FormReduce"
import TodoReducer from "../day23/TodoReducer"
import PageLayout from "../PageLayout"

const Day23 = () => {
  return (
    <>
    <PageLayout>
        <Navbar/>
        <CountReduce/>
        <FormReduce/>
        <TodoReducer/>
    </PageLayout>
    </>
  )
}

export default Day23