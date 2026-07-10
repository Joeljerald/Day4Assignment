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


      const handleChange=(e)=>{
        const filteredData=studentData.filter((e)=>e.firstName.toLowerCase().includes(e.target.value.toLowerCase()) || e.maidenName.toLowerCase().includes(e.target.value.toLowerCase()) ||e.lastName.toLowerCase().includes(e.target.value.toLowerCase()) )

        setSearch(filteredData)
      }

      return{studentData,search,error,loading,handleChange}
    


}

export default useSearch