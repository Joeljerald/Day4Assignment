import ButtonDisplay from "../day17/ButtonDisplay"
import InputDisplay from "../day17/InputDisplay"
import ScrollSPA from "../day17/ScrollSPA"
import Toggle from "../day17/Toggle"
import Navbar from "../components/Navbar"

const Day17 = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-slate-100 py-10">
      
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-10">
          
          <InputDisplay />
          <ScrollSPA />
          <Toggle />
          <ButtonDisplay />
        </div>
      </div>
    </div>
    </>
  );
}

export default Day17