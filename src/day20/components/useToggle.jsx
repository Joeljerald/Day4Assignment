import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [showPassword, setShowPassword] = useState(initialValue);
  const[data,setData]=useState({userName:"",userEmail:"",userPassword:""})
  const [display,setDisplay]=useState([])

  const handleToggle = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setDisplay([...display,data]);
    setData({userName:"",userEmail:"",userPassword:""})
    
  }
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }


  return { display,data,showPassword, handleToggle , handleSubmit,handleChange };
}

export default useToggle;