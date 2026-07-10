import { useEffect, useState } from "react"


const useSearch = (url) => {
    const[studentData,setStudentData]=useState([]);
    const[search,setSearch]=useState([])
    const[error,setError]=useState("")
    const[loading,setLoading]=useState(true)

    const getData=async()=>{
        try{
            const fetchStudentData=await fetch(url);
            const convert=await fetchStudentData.json();
            
            setStudentData(convert.users);
            setSearch(convert.users);
        }
        catch(error){
            setError(error.message)
        }
        finally{
            setLoading(false);
        }
      }
    
      useEffect(()=>{
        getData();
      },[url])


      const handleChange = (e) => {
  const value = e.target.value.toLowerCase().trim();

  if (value === "") {
    setSearch(studentData);
    return;
  }

  const filteredData = studentData.filter((student) => {
    return (
      student.firstName.toLowerCase().includes(value) ||
      student.lastName.toLowerCase().includes(value) ||
      student.maidenName.toLowerCase().includes(value)
    )
  })

  setSearch(filteredData);
}
      return{studentData,search,error,loading,handleChange}
    


}

export default useSearch