import { useState } from "react"

const useCounter = (value) => {
 const [count,setCount]=useState(value);

 const handleIncrement=()=>{
    setCount((prev)=>prev+1)
 }

 const handleDecrement=()=>{
    if(count>0){
        setCount(count-1);
    }
    else{
        setCount(0)
    }
    
 }

 const handleReset=()=>{
    setCount(value)
 }

 return{count,handleIncrement,handleDecrement,handleReset}
}

export default useCounter