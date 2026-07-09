import {createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export default AuthContext;

export const AuthProvider=({children})=>{
    const navigate=useNavigate()
    const [user,setUser]=useState(null);
    useEffect(()=>{
        const currentData=JSON.parse(localStorage.getItem("currentdata"))

        if(currentData){

            setUser(currentData)
            
        }

    },[])

    const login=(userdata)=>{
        localStorage.setItem("currentdata",JSON.stringify(userdata))
        setUser(userdata)

    }

    const logout=()=>{
        localStorage.removeItem("currentdata")
        navigate("/login19")

        setUser(null)
    }

    return(
        <>
        <AuthContext.Provider value={{user,login,logout}}>
            {children}


        </AuthContext.Provider>
        
        </>
    )
}