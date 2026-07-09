import { Navigate } from "react-router-dom"


const ProductedRouters = ({children}) => {
    const user = JSON.parse(localStorage.getItem("currentdata"))

    return user ? children:<Navigate to={"/login19"}  />

}

export default ProductedRouters