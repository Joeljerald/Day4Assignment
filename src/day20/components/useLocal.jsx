import { useState } from "react"

const useLocal = () => {

    const[student,setStudent]=useState({studentID:"",studentName:"",course:"",institude:""})
    const[display,setDisplay]=useState(
        JSON.parse(localStorage.getItem("Student Data")) || []
    )

    const handleChange=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!student.studentID ||
  !student.studentName ||
  !student.course ||
  !student.institude){
            alert("Enter all the required field")
            return
        }

        const getData=JSON.parse(localStorage.getItem("Student Data")) || [];
        getData.push(student);
        localStorage.setItem("Student Data",JSON.stringify(getData))
        setDisplay(getData);
        setStudent({studentID:"",studentName:"",course:"",institude:""})
    }


    return {student,display,handleChange,handleSubmit};
  
}

export default useLocal