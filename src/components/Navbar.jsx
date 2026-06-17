import { Link } from "react-router-dom"
const Navbar=()=>{
    return (<>
<div className="flex bg-blue-200 justify-between">
        <Logo/>
        <Companyname/>
        <Menu/>
    </div>
    </>)

}
export default Navbar

const Logo=()=>{
    return(<>
    <div className="w-20 h-20 py-5">
        <img src="./SLALogo.webp"/>
    </div>
    </>)
}

const Companyname=()=>{
    return(<>
    <div className="flex text-center ml-65 py-7 ">
        <h1 ><strong className="text-2xl font-bold mr-40">SoftLogic Institude</strong></h1>
    </div></>)
}

const Menu=()=>{
    return(<>
    <div className="flex gap-10  mx-8 mt-5">
        <Link to="./" className="text-white bg-black w-20 h-10 rounded-2xl py-1.5 px-4">Tasks </Link>
        
        </div></>)

}


