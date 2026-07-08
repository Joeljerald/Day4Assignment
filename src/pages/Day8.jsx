import Navbar from "../components/Navbar"
import FullNameForm from "../day8/FullNameForm"
import InputForm from "../day8/InputForm"
import ListCreatorForm from "../day8/ListCreatorForm"
import LoginForm from "../day8/LoginForm"
import TextFind from "../day8/TextFind"
import PageLayout from "../PageLayout"

const Day8 = () => {
  return (
    <>
    <PageLayout>
    <Navbar/>
    <div className="flex flex-col gap-5">
        <FullNameForm/>
        <InputForm/>
        <ListCreatorForm/>
        <LoginForm/>
        <TextFind/>
        </div>
        </PageLayout>
        </>
  )
}

export default Day8